<<<<<<< HEAD
let abrirModal = document.querySelector(".asignarAlumno");
=======
let abrirModal = document.querySelector(".gestionarAlumnos");
>>>>>>> fcf07057b3cd0fe57795d887338c9f15d2378d27
let cerrar = document.querySelector(".cerrar");
let modal = document.querySelector(".modal");
let ventanaModal = document.querySelector(".ventana-modal");


let guardar = document.querySelector(".guardar");
let opcion = 0;

abrirModal.addEventListener("click", function (e) {
	e.preventDefault();
	ventanaModal.style.opacity = "1";
	ventanaModal.style.visibility = "visible";
	modal.classList.toggle("modalClose");
	
});
cerrar.addEventListener("click", cerrarModal);
function cerrarModal(e) {
	e.preventDefault();
	modal.classList.toggle("modalClose");
	setTimeout(function () {
		ventanaModal.style.opacity = "0";
		ventanaModal.style.visibility = "hidden";
	}, 800);
}
window.addEventListener("click", function (e) {
	e.preventDefault();

	if (e.target == ventanaModal) {
		modal.classList.toggle("modalClose");
		setTimeout(function () {
			ventanaModal.style.opacity = "0";
			ventanaModal.style.visibility = "hidden";
		}, 800);
	}
});
function editar(e) {
	e.preventDefault();
	document.querySelector(".titulo-modal").innerHTML = "Editar persona";
	ventanaModal.style.opacity = "1";
	ventanaModal.style.visibility = "visible";
	modal.classList.toggle("modalClose");
	opcion = 2;
}
