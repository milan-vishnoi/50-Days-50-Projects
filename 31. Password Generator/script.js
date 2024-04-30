const randomFunction = {
lower : getRandomLowercase,
upper : getRandomUppercase,
number : getRandomNumber,
symbol : getRandomSymbol
};

function getRandomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>,./";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLowercase()+" "+getRandomUppercase()+" "+getRandomNumber()+" "+getRandomSymbol());