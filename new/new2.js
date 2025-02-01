let login = true ;
let username ;
let pass;

do{
    username=window.prompt(`enter your username`);
    pass=window.prompt(`enter your password`);
    if(username==='abir'&& pass ==='2247'){
        login = true;
        console.log('you are logged in');
    }
    else
    {console.log("invaild username or password try again ")};
}while(!login)