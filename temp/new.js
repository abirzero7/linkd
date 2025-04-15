function rolldice(){
    const numofdice = document.getElementById(`numofdice`).value;
    const dicereslt = document.getElementById(`diceresult`);
    const diceimage = document.getElementById(`diceimage`);
    const dice = [];
    const image = [];


    for(let i=0;i< numofdice; i++){
const value=Math.floor(Math.random()*6)+1;
dice.push(value);
image.push(`<img src="dice_images/${value}.jpg">`);
    }
    dicereslt.textContent=`dice: ${dice.join(`, `)}`;
    diceimage.innerHTML=image.join(``);
}