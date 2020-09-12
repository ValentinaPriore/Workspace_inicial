var category = {};

//Las fotos del producto

function showImagesGallery(array) {
  let htmlContentToAppend = "";

  for (let i = 0; i < array.length; i++) {
    let imageSrc = array[i];

    htmlContentToAppend +=
      `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + 
      imageSrc +
      `" alt="">
            </div>
        </div>
        `;
  }
  document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
}



//Las fotos de los productos relacionados


function showRelatedProducts(array) { 
  let htmlContentToAppend = "";

  

  for (let i = 0; i < array.length; i++) {

    let pos = array[i];

    htmlContentToAppend +=
      `
       <div class="col-lg-3 col-md-4 col-6">
           <div class="d-block mb-4 h-100">
               <img class="img-fluid img-thumbnail" src="` + productsAll[pos].imgSrc +
      `" alt=""> 
      <p>` + productsAll[pos].name + `</p>      
           </div>
       </div>
       `;
    document.getElementById("relacionadas").innerHTML = htmlContentToAppend;
  }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      product = resultObj.data;

      let categoryNameHTML = document.getElementById("categoryName");
      let categoryDescriptionHTML = document.getElementById(
        "categoryDescription"
      );
      let productCountHTML = document.getElementById("productCount");
      let productCriteriaHTML = document.getElementById("productCriteria");

      categoryNameHTML.innerHTML = product.name;
      categoryDescriptionHTML.innerHTML = product.description;
      productCountHTML.innerHTML = product.soldCount;
      productCriteriaHTML.innerHTML = product.cost + " " + product.currency;

      showImagesGallery(product.images);


      // Productos relacionados

      getJSONData(PRODUCTS_URL).then(function (resultProd) {
        if (resultProd.status === "ok") {
          productsAll = resultProd.data; 

          showRelatedProducts(product.relatedProducts);
        }

     

        // Comentarios
      });
      getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultProd) {
        if (resultProd.status === "ok") {
          comments = resultProd.data;

          for (let i = 0; i < comments.length; i++) {
            let commentsDescriptionHTML = document.getElementById(
              "comentarios"
            );

          // Estrellas

           let cantEstrellas = comments[i].score;
           let estrellas = "" 
           
           for (a = 0; a < cantEstrellas; a++){
            
            estrellas += `<span id='star1' class='fa fa-star checked'></span>`;

           };

           
            commentsDescriptionHTML.innerHTML +=
              `<div style="width: 100%; margin: auto;" > <p > <b>` +
              comments[i].user +
              "</b>" + " " +
              comments[i].dateTime +
              " - " + estrellas +
              " <br> " +
              comments[i].description 
            +`</p> <hr> </div>
                        `;





          };
        };
      });




        




    }
  });
});
