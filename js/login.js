//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function callme(){
	var name = document.getElementById('inputEmail').value;
	sessionStorage.setItem('userName', name);
}



//fiesta
var x = document.getElementById("maluma"); 
var y = 0;

function playAudio() { 
	if (y = 0) {
		x.play(); 
	}
  
} 

function pauseAudio() {  
  x.pause(); 
} 



const btnSwitch = document.querySelector('#cambio');

btnSwitch.addEventListener('click', () => {
document.body.classList.toggle('dark');
btnSwitch.classList.toggle('active'); 

});


