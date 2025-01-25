
const cheakbox=document.getElementById("chk");
const visa=document.getElementById("radio");
const mastercard=document.getElementById("radio2");
const paypal=document.getElementById("radio3");
const submit=document.getElementById("submit");
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");


submit.onclick =function(){
    if(cheakbox.checked){
        p1.textContent =`you are in`;
        
    }
    else{ p1.textContent =`you are not in`;

    }
    if(!cheakbox.checked){p2.textContent =`you must select you are in`;


    }
    

    else if(visa.checked){
        p2.textContent=`you are using visa for pay`;

    }
    else if (mastercard.checked){
        p2.textContent=`you are using mastercard for pay`;
    }
    else if (paypal.checked){
        p2.textContent=`you are using paypal for pay`;

}
else {p2.textContent=`plese select a paying option `;
}
}