const openModalButton = document.querySelector("#open-modal");
const openModalButton2 = document.querySelector("#open-modal2");
const openModalButton3 = document.querySelector("#open-modal3");
const openModalButton4 = document.querySelector("#open-modal4");
const openModalButton5 = document.querySelector("#open-modal5");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#content-modal");
const fade = document.querySelector(".modalcontainer");
const mudarPerfil = document.querySelector(".perfil");
const removeOutline = document.querySelector(".btn-outline-success");
const addOutline = document.querySelector(".exit");

openModalButton.addEventListener("click", () =>{
    fade.style.display = "flex";
    modal.style.display = "block";
});

openModalButton2.addEventListener("click", () =>{
    fade.style.display = "flex";
    modal.style.display = "block";
});

openModalButton3.addEventListener("click", () =>{
    fade.style.display = "flex";
    modal.style.display = "block";
});

openModalButton4.addEventListener("click", () =>{
    fade.style.display = "flex";
    modal.style.display = "block";
});

openModalButton5.addEventListener("click", () =>{
    fade.style.display = "flex";
    modal.style.display = "block";
});

closeModalButton.addEventListener("click", () =>{
    fade.style.display = "";
    modal.style.display = "";
});

fade.addEventListener("click", () =>{
    fade.style.display = "";
    modal.style.display = "";
});

mudarPerfil.innerHTML = `<img src="${localStorage.getItem("perfil")}"/>`;
removeOutline.classList.remove("btn-outline-success");

addOutline.addEventListener("click", () =>{
    mudarPerfil.innerHTML = `<a class="perfil btn btn-outline-success" href="perfil/perfil.html">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
    </svg>
  </a>`
});