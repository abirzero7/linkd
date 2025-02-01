let username = "";
username = username.toLowerCase();

while(username === ""|| username === null || username === "no"
    ||username.toLowerCase() !== "yes"){
    username=window.prompt("Are You Gay?");

}

console.log(`i knew it's ${username}`);