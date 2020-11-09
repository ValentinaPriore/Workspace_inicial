//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
	

});

function callme(){
	var name = document.getElementById('inputEmail').value;
	localStorage.setItem('sesionactual', name)
	var contraseña = document.getElementById('inputPassword').value;
	localStorage.setItem('contraseñaActual', contraseña)
	var DataLogin = JSON.parse(localStorage.getItem('DataLogin'))

	

	
	if (localStorage.getItem('DataLogin') == null) {
		DataLogin = [];

		localStorage.setItem('DataLogin', JSON.stringify(DataLogin))
		persona = {correo: name, 
		contraseña: contraseña,
		nombres: "", 
		user: "", 
		edad: "", 
		telefono: ""}

		DataLogin.push(persona)
		localStorage.setItem('DataLogin', JSON.stringify(DataLogin))

		
		}

	for(i = 0; i < DataLogin.length; i++){
		if(DataLogin[i].correo == name)	{

			if(DataLogin[i].contraseña !== contraseña){
				alert("Contraseña incorrecta")
				contG = 0;
				localStorage.setItem("VariableContador", contG)
				
			}

			if(DataLogin[i].contraseña = contraseña){
				contG = 1;
				localStorage.setItem("VariableContador", contG)
			}

			

		} else {
			localStorage.setItem('DataLogin', JSON.stringify(DataLogin))
			persona = {correo: name, 
			contraseña: contraseña,
			nombres: "", 
			user: "", 
			edad: "", 
			telefono: ""}

			DataLogin.push(persona)
			localStorage.setItem('DataLogin', JSON.stringify(DataLogin))
			break;
		}
	}

	
	
		
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

//negro

const btnSwitch = document.querySelector('#cambio');

btnSwitch.addEventListener('click', () => {
document.body.classList.toggle('dark');
btnSwitch.classList.toggle('active'); 

});


