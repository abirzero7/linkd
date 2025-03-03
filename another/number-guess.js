const minimum=1;
const maximum=100;
const answer = Math.floor(Math.random()*
(maximum - minimum + 1))+minimum;

console.log(answer);

let atmps = 0;
let guess;
let running = true

while(running){
    guess = window.prompt
    (`guess a number between ${minimum} to ${maximum}`)
    guess=Number(guess);
if(isNaN(guess)){
    window.alert(`please enter a valid number`);
}
else if (guess <minimum | guess >maximum){
    window.alert(`please enter a valid number`); 
}else{
    atmps++;
    if(guess<answer){
        window.prompt(`too low! try again bro`);
         
     }
        else if(guess>answer){
        window.prompt(`too high! try again bro`);
    }
    else{
        window.alert(`correct ! the answer is ${answer}. it took you ${atmps} attemps`);
        running=false
    }
}
    
}