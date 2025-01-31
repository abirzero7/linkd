//let x= "hey "
//let y= " so much ";

//z = x+y.padStart(100,("i love you "));
//console.log(z)

const text=document.getElementById("input");

const submit=document.getElementById("submit");
const label=document.getElementById("label");

submit.onclick=function(){
    
let pad1=(text.value);

let x= "U";
let y= "mah";

let z=x+y.padStart(pad1,"m");
label.textContent=z;

console.log(z)


}


