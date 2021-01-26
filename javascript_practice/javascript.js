/*const nicoInfo = {
    name: "Nico",
    age : 33,
    gender: "Male",
    isHandsome: true,
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favFood: [
        {
            name: "Kimchi",
            fatty: false
        },
        {
            name: "Cheese berger",
            fatty: true
        }
    ]
}
console.log(nicoInfo.favFood[0].name);*/

/*
function sayHello(name, age){
    console.log(`Hello! ${name} you have ${age} years of age.`);
}

sayHello("Nicolas",15);*/
/*
const calculator = {
    plus: function(a,b){
        return a + b;
    },
    miners : function(a,b){
        return a - b;
    },
    div: function(a,b){
        return a / b;
    },
    mul: function(a,b){
        return a * b;
    },
    dmul: function(a,b){
        return a ** b;
    }
}

//console.log(greetNicolas)
const plus = calculator.plus(5,5)
const miners = calculator.miners(5,5)
const div = calculator.div(5,5)
const mul = calculator.mul(5,5)
const dmul = calculator.dmul(5,5)

console.log(plus)
console.log(miners)
console.log(div)
console.log(mul)
console.log(dmul)
*/

//const title = document.querySelector("#title");

/*
title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.dir(document)
document.title = "I own you now"
*/

/*
function handleClick(){
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);
*/
/*
if(10 === 5){
    console.log('hi');
}
else if(10===10 && 5>1){
    console.log('hi2');
}
else{
    console.log('ho');
}
*/
/*
const age = prompt("How old are you")

if(age >= 18 && age <= 21){
    console.log('you can drink but you should not');
}else if(age > 21){
    console.log(`go ahed`)
}else{
    console.log('to young')
}
*/
/*
const title = document.querySelector("#title");

const BASE_COLOR = 'rgb(52, 73, 94)';
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();

function handleOffline() {
    console.log("h2");
}

window.addEventListener("offline", handleOffline)
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();