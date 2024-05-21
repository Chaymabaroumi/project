function generateID() {
      var count = 0;
      return function () {
        return count++;
      };
    }
    var id = generateID();

var clothes=[]
    function makeCloth(name,price,category,images){
    var cloth={
    name,
    price,
    category,
    images,
    id:id()
}
clothes.push(cloth)
    }

     makeCloth("dress","50$","women",["https://th.bing.com/th/id/OIP.deUBCvCFcOVe_KFy2ieUcAHaJQ?w=680&h=850&rs=1&pid=ImgDetMain","https://th.bing.com/th/id/OIP.c84U7EOWw_OdqhcCvkEvFwHaJ4?pid=ImgDet&w=474&h=632&rs=1","https://th.bing.com/th/id/OIP.W9h40FETC8H6K7vN_63Z5gAAAA?rs=1&pid=ImgDetMain","https://th.bing.com/th/id/OIP.pLnF3hEMANnMroziYTTiqwHaL3?rs=1&pid=ImgDetMain"]),
     makeCloth("jeans","60$","men",["https://cdn.mcjeans.ch/out/pictures/master/product/1/0799_levis-501-men-on-denim-501-0193_f.jpg","https://th.bing.com/th/id/OIP.K1KqrFhJxUNet5P0-pcbHQHaKs?w=1524&h=2200&rs=1&pid=ImgDetMain","https://i5.walmartimages.com/asr/c012ffa0-2408-4e34-968c-fb05f7393f6c_1.3d4e37621e5334c12b92122e0ad1c6d8.jpeg","https://cdni.llbean.net/is/image/wim/104731_1703_72?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/104731_1703_41","https://cdnc.lystit.com/photos/f0c0-2015/10/08/joes-brown-slim-fit-jeans-product-2-433343196-normal.jpeg"])
     makeCloth("t-shirt","40$","kids",["https://cheapsalemarket.com/wp-content/uploads/2019/05/Cartoon-Animal-Children-Kids-Boys-Girls-Short-Sleeve-T-Shirt-for-Summer.jpg","https://usgattim.com.br/wp-content/uploads/2021/03/dinossauro-comilao.jpg","https://th.bing.com/th/id/OIP.RGDm7O9PBS0oinm7mPaKrAAAAA?rs=1&pid=ImgDetMain","https://image.fashiontiy.com/products/T1035DD3BE/main_2.jpg","https://th.bing.com/th/id/OIP.YNn84zCju3_f6oDUovM2cQAAAA?rs=1&pid=ImgDetMain"])

    
   
    

    function display(cloth, index){
      console.log(cloth.price )
        $("#shop").append(
            `
            <div id="clothes-${cloth.id}" >
            <h2 id='cl'>${cloth.category}</h2>
            <img 
            class="posters"
            id="img-${cloth.id}"
            src= ${cloth.images[0]}
            onclick="toggleImage(${cloth.id}, ${index})"
             alt="this"
                />
            <button onclick= "deleteclothes(${cloth.id})">X</button>
            <h3 id='cl1'>${cloth.name}</h3>
            <h4 id='cl2'>${cloth.price}</h4>
            </div>`
            )
    }
   




    function displayclothes(array) {
        $("#shop").empty();
        for (let i = 0; i < array.length; i++) {
          const cloth = array[i];
          display(cloth, i);
        }
      }


displayclothes(clothes)

var imageIndex=0;
function toggleImage(id,clothIndex){

  console.log(imageIndex);
  var img='#img-'+id;
  console.log(img);
  imageIndex=(imageIndex+1)%clothes[clothIndex].images.length;;
  console.log(clothes[clothIndex].images);
  $(img).attr("src",clothes[clothIndex].images[imageIndex]);
}

     

$("sort").click(function(){
    var sortedByPrice=clothes.toSorted(function(a,b){
        return a.price-b.price;
    })
    console.log(sortedByPrice);
    displayclothes(sortedByPrice);
})

function removeItem(id) {
    return clothes.filter(function (element) {
      return element.id !== id;
    });
  }
  
  // function category(criteria) {
  //   var fileredByCat = movies.filter(function (element) {
  //     return element.category === criteria;
  //   });
  //   displayclothes(fileredByCat);
  // }
  // $("#women").click(function () {
  //   category("women");
  // });
  
  // $("#men").click(function () {
  //   category("men");
  // });
  
  // $("#kids").click(function () {
  //   category("kids");
  // });


$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      height: 'toggle'
    });
  });
});