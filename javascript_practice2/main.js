/*
function printHello(){
    console.log ('Hello');
}
printHello()

function log(message){
    console.log(message);
}
log('Hello')

function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

//3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    if (from===undefined){
    from = 'unknown'; 
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4.Rest parameters (added in ES6)
function printALl(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }
    args.forEach(arg) => console.log(arg)
}
printALl('dream', 'coding', 'ellie');

//5.Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

//7.Early return, early exit
//bad
function upgradeUser(user){
    if (user.point > 10){
        //long upgrade logic...
    }
}
//good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic...
}

const print = function () {
    console.log('print')
}

//IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();
*/

//Class

class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2.Getter and setter 사용자가 잘못입력하는것을 방지하는것

class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        //call back을 방지하기위해 변수명을 다르게 설정한다
        return this._age
    }

    set age(value) {
        //if(value < 0){
            //throw Error('age can not be negative')
        //}
        this._age = value < 0 ? 0 : value
    }
}

const user1 = new User('Steve', 'Job', -1);

//3.Fields (public, private)

class Experiment{
    publicField = 2;
    //#는 class내부에서만 접근하고 변경할 수 있지만 외부에선 안됨
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4.Static properties and methods
//데이터와 상관없이 반복적으로 사용되는 class의 연결되어 사용됨
//object가 아닌 class자체에 연결되어있어서 부르기 위해선 클래스를 사용
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);

//5.Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}
//extends class연장
class Rectangle extends Shape {}
class Triangle extends Shape{
    //Overriding 재정의해서 출력하기위해
    draw() {
        //super 부모의 draw를 갖고 오는것
        super.draw();
        console.log('▲');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6.Class checking: instanceOf
// A instanceof B A가 B의 class로 만들어졌는지 아닌지 확인하기위해 사용
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Object); //= True