//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

//Fiesta
const themeSwitch = document.getElementById("theme-switch");
const body = document.getElementById("body");

themeSwitch.addEventListener("click", () => {
	let currentBodyClass = body.className;

	if (body.className === "light") {
		body.className = "dark";
	} else if (body.className === "dark") {
		body.className = "light";
	}
});