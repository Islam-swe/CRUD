

var ProdName=document.getElementById('productName');
var ProdPrice=document.getElementById('productPrice');
var ProdCategory=document.getElementById('productCategory');
var ProdDesc=document.getElementById('productDesc');

var productsList;


//just to test the self invoked function >>
(function storageImportingData(){
//     it's also available to use one (if) condition to check if the
//     localStorage is NOT empty >>bring the data and display it:
//    >> if(localStorage.getItem("myProductList") != null){
//         productsList=JSON.parse(localStorage.getItem("myProductList"));
//         display();
//     }
    if(localStorage.getItem("myProducts") == null){
        productsList=[];
    }
    else{
        productsList=JSON.parse(localStorage.getItem("myProducts"));
        display();
    }
    
   
})();

function addProduct(){
    var product={
        name:ProdName.value,
        price:ProdPrice.value,
        category:ProdCategory.value,
        descrip:ProdDesc.value,
    }
    productsList.push(product);
    localStorage.setItem("myProducts",JSON.stringify(productsList));
    display();  
    clearInputs();
}

function display(){
    var cont="";    
    for(var i=0; i<productsList.length; i++){
        cont+=`<tr> 
        <td>`+i+`</td>
        <td  onclick='displayOneProduct(`+i+`);'><a href=#>`+productsList[i].name+`</a></td>
        <td>`+productsList[i].price+`</td>
        <td>`+productsList[i].category+`</td>
        <td>`+productsList[i].descrip+`</td>
        <td><button onclick='updateProduct(`+i+`);'  class="btn btn-warning">Update </button></td>
        <td><button onclick='deletProduct(`+i+`);' class="btn btn-danger">Delete </button></td>
            </tr>`;
    }
    document.getElementById('tbody').innerHTML=cont;
    
}

function clearInputs(){
    ProdName.value="";
    ProdPrice.value="";
    ProdCategory.value="";
    ProdDesc.value="";
}
function searchProducts(term){
    
    var cartona="";
    var cartona2="";
    for(var i=0; i<productsList.length;i++){
       
                var newTerm="";
        if(productsList[i].name.includes(term.trim()) == true)
        {      
                cartona+=`<tr>
                <td>`+i+`</td>
                <td>`+productsList[i].name+`</td>
                <td>`+productsList[i].price+`</td>
                <td>`+productsList[i].category+`</td>
                <td>`+productsList[i].descrip+`</td>
                <td><button onclick='updateProduct(`+i+`);'  class="btn btn-warning">Update </button></td>
        <td><button onclick='deletProduct(`+i+`);' class="btn btn-danger">Delete </button></td>
         </tr>`; 
                
    newTerm=productsList[i].name.replace(term,`<span style=color:red>`+term+`</span>`);
                 cartona2+=`<p>`+newTerm+`</p>`;   
        }
       
    }

    
    document.getElementById('result').innerHTML=cartona2;
    document.getElementById('tbody').innerHTML=cartona;
    
}

function deletProduct(index){
    productsList.splice(index,1);   
    localStorage.setItem("myProducts",JSON.stringify(productsList) );
    display();
}


function updateProduct(i){
    productsList[i].name=ProdName.value;
    productsList[i].price=ProdPrice.value;
    productsList[i].category=ProdCategory.value;
    productsList[i].descrip=ProdDesc.value;
    localStorage.setItem("myProducts",JSON.stringify(productsList) );
    display();      

}
function displayOneProduct(i){
 document.getElementById('productName').value=productsList[i].name;
 document.getElementById('productPrice').value=productsList[i].price;
 document.getElementById('productCategory').value=productsList[i].category;
 document.getElementById('productDesc').value=productsList[i].descrip;
}


// //var myImg= document.getElementById('test');
// document.body.addEventListener('mousemove',function(e){
//     document.getElementById('test').style.left= e.clientX;
//     document.getElementById('test').style.top=e.clientY;
    
   
// })