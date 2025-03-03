let login= false;
let username;
let password;

while(!login){
    username = window.prompt (`enter your username`);
    password = window.prompt (`enter your password`);

    if(username === "abir" && password === "1234"){
        login=true
        console.log(`you are logged in`)

    }
    else{
        console.log('invail username or password ! try again')
    }
}