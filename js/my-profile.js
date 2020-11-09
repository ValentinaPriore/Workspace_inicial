//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});
var mail = document.getElementById("mail")
var usuario = document.getElementById("usuario")

var nombre = document.getElementById("nombre")
var DataloginEditar = JSON.parse(localStorage.getItem("DataLogin"))
var usuarioActual = localStorage.getItem("sesionactual")
var contraseñaActual = localStorage.getItem("contraseñaActual")

for(i = 0; i < DataloginEditar.length; i++){
  if (DataloginEditar[i].correo == usuarioActual) {
    

   
    nombre.innerHTML = DataloginEditar[i].nombres;
    mail.innerHTML = DataloginEditar[i].correo;
    usuario.innerHTML = DataloginEditar[i].user;
    break;
  }
  
}


window.onload = function() {
    document.getElementById('welcome').innerText = "Hola, " + localStorage.getItem('sesionactual');
    
};




function cambiemosTodoBB(){

    //los inputs
      
      let usuarioEditar = document.getElementById("usuarioEditar").value 
      let mailEditar = document.getElementById("mailEditar").value
      let nombreEditar = document.getElementById("nombreEditar").value
      let edadEditar = document.getElementById("edadEditar").value
      let telefonoEditar = document.getElementById("telefonoEditar").value

    //donde quiero que aparezca la información arriba en la página, no es importante

   
     
     

    //donde quiero que guarde la info

     
     
     for(i = 0; i < DataloginEditar.length; i++){
       if (DataloginEditar[i].correo == usuarioActual){

        DataloginEditar[i] = {correo: usuarioActual, 
          nombres: nombreEditar, 
          contraseña: contraseñaActual,
          user: usuarioEditar, 
          edad: edadEditar, 
          telefono: telefonoEditar}
          nombre.innerHTML = DataloginEditar[i].nombres;
          mail.innerHTML = DataloginEditar[i].correo;
          usuario.innerHTML = DataloginEditar[i].user;
          localStorage.setItem('DataLogin', JSON.stringify(DataloginEditar))
          break;
          
       }
       
     }
     
     
      
}


  


 
    var inputcontraseñaactual = document.getElementById("contraseñaactual").value
  var contraseña = localStorage.getItem('sesionactual')

  function validarContraseñaActual() {
    if(inputcontraseñaactual !== contraseña) {
        alert("contraseña incorrecta")
        e.preventDefault();
        return false;
    }

  }

