const bobFotoPerfil = document.querySelector(".bob-esponja");
const patrickFotoPerfil = document.querySelector(".patrick-estrela");
const lulaFotoPerfil = document.querySelector(".lula-molusco");
const siriguejoFotoPerfil = document.querySelector(".siriguejo");
const sandyFotoPerfil = document.querySelector(".sandy");
const encerrarSessao = document.querySelector(".exit");

bobFotoPerfil.addEventListener("click", () =>{
    localStorage.setItem("perfil", "./perfil/assets/img/bob-esponja.jpg");
    window.location.href = "../index.html";
});

patrickFotoPerfil.addEventListener("click", () =>{
    localStorage.setItem("perfil", "./perfil/assets/img/patrick-estrela.jpg");
    window.location.href = "../index.html";
});

lulaFotoPerfil.addEventListener("click", () =>{
    localStorage.setItem("perfil", "./perfil/assets/img/lula-molusco.jpg");
    window.location.href = "../index.html";
});

siriguejoFotoPerfil.addEventListener("click", () =>{
    localStorage.setItem("perfil", "./perfil/assets/img/siriguejo.jpg")
    window.location.href = "../index.html";
});

sandyFotoPerfil.addEventListener("click", () =>{
    localStorage.setItem("perfil", "./perfil/assets/img/sandy.jpg")
    window.location.href = "../index.html";
});