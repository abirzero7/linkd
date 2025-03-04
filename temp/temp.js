const textbox = document.getElementById("textbox");
const F = document.getElementById("F");
const C = document.getElementById("C");
const result = document.getElementById("result");
let temp;


function convert(){
if(F.checked){
//result.textContent =`you selected to fahrenheit `
temp=Number(textbox.value);
temp= temp*9/5+32;
result.textContent = temp.toFixed(1) + "°F";

}
else if (C.checked){
    temp=Number(textbox.value);
    temp= (temp-32)*5/9
    result.textContent = temp.toFixed(1) + "°C";

//result.textContent =`you selected to celcius`
}
else{
    result.textContent =`select a Unit`
}
}