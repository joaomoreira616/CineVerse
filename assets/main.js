function iniciomodal(modalid) {
    const modal = document.getElementById(modalid);
    console.log(modal);
    modal.classList.add('mostrar')
}

iniciomodal('modal-container')