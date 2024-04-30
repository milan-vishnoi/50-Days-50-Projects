const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const lowercaseElement = document.getElementById("lowercase");
const uppercaseElement = document.getElementById("uppercase");
const numberElement = document.getElementById("numbers");
const symbolElement = document.getElementById("symbols");
const generateElement = document.getElementById("generate");
const clipboardElement = document.getElementById("clipboard");

const randomFunction = {
lower : getRandomLowercase,
upper : getRandomUppercase,
number : getRandomNumber,
symbol : getRandomSymbol
};

generateElement.addEventListener("click", () => {
    const length = +lengthElement.value;
    const hasUpper = uppercaseElement.checked;
    const hasLower = lowercaseElement.checked;
    const hasNumber = numberElement.checked;
    const hasSymbol = symbolElement.checked;

    resultElement.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

function generatePassword(upper, lower, number, symbol, length) {
    let password = "";
    let typesCount = upper + lower + number + symbol;
    let typesArray = [{upper},{lower},{number},{symbol}].filter(item => Object.values(item)[0]);
    
    if(typesCount === 0)
    {
        return "";
    }
    
    for(let i=0; i<length;i+=typesCount)
    {
        typesArray.forEach(type => {
              const functionName = Object.keys(type)[0];
              password+= randomFunction[functionName]();
        })
    }
     
    return password.slice(0,length);
}

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
