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

const observadorHistoria = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("entrar");

                observadorHistoria.unobserve(entrada.target);

            }

        });

    },
    {
        threshold: 0.18
    }
);

observadorHistoria.observe(blocoHistoria);