var input = document.getElementById('esto'); //esto es el input
const log = document.getElementById('costo');
const envio2 = document.getElementById('envio')
const subtotal = document.getElementById('subtotal')

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(INFO_CARRITO_2_PRODUCTOS).then(function (resultProd) {
        if (resultProd.status === "ok") {
          objeto = resultProd.data;
            
            let productos = document.getElementById(
              "productos"
            );

            mostrarArticulos(objeto.articles);

            input = document.getElementById('esto'); //esto es el input
 
            updateTotal();
   
          };
    
      });
    
});

window.onload = function() {
    document.getElementById('welcome').innerText = "Hola, " + sessionStorage.getItem('userName');
};

function mostrarArticulos(articulos){
    for (i = 0; i < 1 ; i++){
    
    let preciounitario = articulos[i].unitCost;

    productos.innerHTML += `<div class="row">
    <div class="col-2 col-sm-2 col-md-2 text-center">
            <img class="img-responsive" src="`+ articulos[i].src +`" alt="prewiew" width="60">
    </div>
    <div class="col-4 text-sm-center col-sm-4 text-md-left col-md-4">
        <h6 class="product-name"><strong>`+ articulos[i].name +`</strong></h6>
    </div>
    <div class="col-4 col-sm-4 text-sm-center col-md-4 text-md-right row">
        <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
            <h6><strong> Precio por unidad $ <div class="preciounitario">` + preciounitario + `</div> <span class="text-muted">`+ articulos[i].currency +`</span></strong></h6>
        </div>
        <div class="col-4 col-sm-4 col-md-4">
            <div class="quantity">
                <input type="number" onchange="updateTotal()" step="1" max="99" min="1" id="esto" value="` + articulos[i].count + `" title="Qty" class="qty"
                       size="4">
            </div>
        </div>
       
    </div id="subtotalarriba">
    </div>
</div>
<hr>   
       `;
              
         
 }
}


function updateTotal(){
    preciosunitarios = document.getElementsByClassName("preciounitario");
    shipping = envio();
    total=0;
    for(i=0;i<1;i++){
        preciounitario = parseInt(preciosunitarios[i].innerHTML) ;
        total += input.value*preciounitario;
    }
    envio2.innerHTML  = `<div class="col">Costo de envío</div> 
      <div  class="col">$`+  total * shipping +` </div>`

        subtotal.innerHTML = `   <div class="col">Subtotal</div> 
        <div  class="col"> $` + total + `</div>`

      log.innerHTML =        
     `<div class="col">Costo de total</div> 
   <div class="col"> $`+ total*(1 + shipping)+ `</div>`;
}

function envio() {
    shipping = 0.05;

    if (document.getElementById("premium").checked){ 
        shipping = 0.15;
    }

    if (document.getElementById("express").checked){ 
        shipping = 0.07;
    }

    if (document.getElementById("standar").checked){ 
        shipping = 0.05;
    }
    return shipping;

 }