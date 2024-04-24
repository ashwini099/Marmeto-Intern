console.log('====================================');
console.log("Connected");
console.log('====================================');
let btn=document.getElementById("Wmn");
console.log(btn);
let url1='https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';

btn.addEventListener("click",async()=>{
   let image= await getImage();
   console.log(image);
   let images=document.querySelector(".card");
   images.innerText=image;
})




async function getImage(){
    try{
let res=await axios.get(url1);
console.log(res.data.category_product);
    }
    catch(e){
console.log('error-',e);
return 'no fact';
    }

}