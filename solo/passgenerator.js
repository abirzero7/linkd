function generatepass(passlength, 
                    includelowerecase, 
                    includeppercase, 
                    includenumbers, 
                    includesymbles){
   
   const lowercasechars= "abcdefghijklmnopqrstuvwxyz";
   const uppercasechars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numbercharts = "012456789";
   const symbolchars ="!@#$%^&*()_+";

   let allowchars = "";
   let password= "";

   allowchars += includelowerecase ? lowercasechars:"";
   allowchars += includeppercase ?uppercasechars:"";
   allowchars += includenumbers ?numbercharts:"";
   allowchars += includesymbles ?symbolchars:"";

    if(passlength <=0){
return`(password length must be at lest 1)`
    }
    if(allowchars.length === 0){
        return`(at least one alphabet need)`
        
    }

    for(let i = 0; i<passlength;i++){
        const random =Math.floor (Math.random()*allowchars.length)
        password += allowchars[random];
    }
                        return password;
}





const passlength =12;
const includelowerecase = true;
const includeppercase = true;
const includenumbers=true;
const includesymbles=true;

const password = generatepass(passlength, 
                            includelowerecase, 
                            includeppercase, 
                            includenumbers, 
                            includesymbles);

                            console.log(`generated passwprd: ${password}`);