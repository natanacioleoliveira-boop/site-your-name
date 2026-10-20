const imagem = document.querySelector(".imagem-inicio");
        const texto = document.querySelector(".conteudo-inicio");
        const inicio = document.querySelector(".inicio");

        window.addEventListener("scroll", function () {

            let scroll = window.scrollY;

            if (scroll <= inicio.offsetHeight) {

                imagem.style.setProperty(
                    "--movimento-imagem",
                    scroll * 0.08 + "px"
                );

                texto.style.setProperty(
                    "--movimento-texto",
                    scroll * -0.08 + "px"
                );

            }

        });




   const faixaHistoria = document.querySelector(".historia-faixa");

const imagemTaki = document.querySelector(".personagem-taki img");

const imagemMitsuha = document.querySelector(".personagem-mitsuha img");


window.addEventListener("scroll", function () {

    const posicao = faixaHistoria.getBoundingClientRect();

    const alturaTela = window.innerHeight;


    if (posicao.top < alturaTela && posicao.bottom > 0) {

        const progresso =
            (alturaTela - posicao.top) /
            (alturaTela + posicao.height);


        const movimento =
            (progresso - 0.5) * 18;


        imagemTaki.style.setProperty(
            "--parallax-personagem",
            movimento + "px"
        );


        imagemMitsuha.style.setProperty(
            "--parallax-personagem",
            -movimento + "px"
        );

    }

});



const blocoHistoria = document.querySelector(".historia-faixa");


function limitar(valor, minimo, maximo) {

    return Math.min(
        Math.max(valor, minimo),
        maximo
    );

}


function animarHistoriaScroll() {

    const posicao = blocoHistoria.getBoundingClientRect();

    const alturaTela = window.innerHeight;


    /*
        ENTRADA

        0 = seção acabou de aparecer
        1 = seção já entrou bastante na tela
    */

    const entrada = limitar(

        (alturaTela - posicao.top)
        /
        (alturaTela * 0.55),

        0,
        1
    );


    /*
        SAÍDA

        Enquanto a seção estiver no centro
        continua em 1.

        Quando começa a sair pelo topo,
        vai diminuindo.
    */

    const saida = limitar(

        posicao.bottom
        /
        (alturaTela * 0.45),

        0,
        1
    );


    /*
        USA O MENOR DOS DOIS VALORES.

        Assim funciona tanto entrando
        quanto saindo da tela.
    */

    const progresso = Math.min(
        entrada,
        saida
    );


    /*
        OPACIDADE
    */

    const opacidade = progresso;


    /*
        ESCALA

        começa em 0.94
        termina em 1
    */

    const escala =
        0.94 +
        (progresso * 0.06);


    /*
        MOVIMENTO VERTICAL

        começa 25px abaixo
        termina na posição normal
    */

    const movimentoY =
        25 *
        (1 - progresso);


    /*
        DESFOQUE

        começa em 3px
        termina em 0
    */

    const desfoque =
        3 *
        (1 - progresso);


    blocoHistoria.style.setProperty(
        "--historia-opacity",
        opacidade
    );


    blocoHistoria.style.setProperty(
        "--historia-scale",
        escala
    );


    blocoHistoria.style.setProperty(
        "--historia-y",
        movimentoY + "px"
    );


    blocoHistoria.style.setProperty(
        "--historia-blur",
        desfoque + "px"
    );

}

window.addEventListener(
    "scroll",
    animarHistoriaScroll
);


window.addEventListener(
    "resize",
    animarHistoriaScroll
);


animarHistoriaScroll();




