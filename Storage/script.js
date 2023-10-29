console.log("this is the console, yep that's it, or is it?");
console.log("just don't type his name backwards");


function secret() {
    const userAnswer = window.prompt("What is the secret code?");
    if (userAnswer == "Leinad") {
        console.log('congratulations you found a secret')
        console.log('here is the secret website')
        console.log('<a href="Storage/sites/secret.html"></a>')
        console.log('you have to put this code on the website')
    }

}