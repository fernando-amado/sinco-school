let abrirModal=document.querySelector('.boton')
let cerrar = document.querySelector(".cerrar");
let modal = document.querySelector(".modal");
let ventanaModal = document.querySelector(".ventana-modal");

abrirModal.addEventListener("click", function (e) {
	e.preventDefault();
	ventanaModal.style.opacity = "1";
	ventanaModal.style.visibility = "visible";
	modal.classList.toggle("modalClose");
	
});

