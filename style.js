const head=document.getElementsByClassName("main");
const containerr=document.querySelectorAll(".container");

const numero=Array.from(document.querySelectorAll(".numero"));

console.log(numero);

const photos=document.getElementsByClassName("photos")[0];

const item=document.getElementsByClassName("item")[0];

const butto=document.getElementsByClassName("button")[0];
const pho=document.getElementById("pho")[0];
console.log(butto);
const capture=[];
let currentlaber=0;
numero[currentlaber].classList.add("changecolor");

function items(){
    photos.addEventListener("click",e=>{
    const source=e.target.getAttribute("src");
    
  const phot=e.target.getAttribute("pho");

    function Image(src){
        this.src=src;
        // this.className=className;

    }

    const images=new Image(source);
    capture.push(images);
    item.innerHTML=capture.length;

})


}
items();



butto.addEventListener("click",e=>{
    currentlaber++;
    numero[currentlaber].classList.add("changecolor");
    photos.innerHTML="";

for(let i=0;i< capture.length;i++){
    let xxx=capture[i].src;
    photos.innerHTML+=`<img src=${xxx}>`
}



    

})



 