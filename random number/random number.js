
const btn =document.getElementById("btn");

const label1 =document.getElementById("label1");
const label2 =document.getElementById("label2");
const label3 =document.getElementById("label3");

const min= 1000
const max=9999; 

let randomcode1;
let randomcode2;
let randomcode3;


let reset = 0
rst = document.getElementById("reset")
 
btn.onclick =function(){
    randomcode1 =Math.floor (Math.random() *(max-min)) +min ;
    randomcode2 =Math.floor (Math.random() *(max-min)) +min ;
    randomcode3 =Math.floor (Math.random() *(max-min)) +min ;
label1.textContent= (`your code 1 is : ${randomcode1}`);
label2.textContent= (`your code 2 is : ${randomcode2}`);
label3.textContent= (`your code 3 is : ${randomcode3}`);
}; 
rst.onclick =function(){
    label1.textContent= (`your code 1 is : ${reset}`);
    label2.textContent= (`your code 2 is : ${reset}`);
    label3.textContent= (`your code 3 is : ${reset}`);
}
