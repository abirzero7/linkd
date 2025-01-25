
const increase =document.getElementById("inc");
const decrease =document.getElementById("dec");
const reset =document.getElementById("reset");
const counting = document.getElementById("count");

let count = 0;

increase.onclick = function(){
    count++;
    counting.textContent = count;

}

decrease.onclick = function(){
    count--;
    counting.textContent = count;
}

reset.onclick=function(){
    count=0;
    counting.textContent = count;
}