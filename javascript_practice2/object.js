//1. Literals and properties

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob)

delete ellie.hasJob;
console.log(ellie.hasJob)

//2. Computed properties 
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

//3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

//4. Consturctor function
function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

//5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);

//6. for..in vs for..of
//for (key in obj)
console.clear();
for (key in ellie){
    console.log(key);
    //ellie 안에있는 key를 나타내는 반복문
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length ; i++) {
    console.log(array[i]);
}
//배열 반복하는것을 위에꺼보다 더 간단히 하는것
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);
//동일한 참조를 하기 때문에

// 오브젝트 복사의 old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);
//new way
const user4 = Object.assign({}, user);
console.log(user4);
// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue'. size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);//blue
console.log(mixed.size);//big
//뒤에것이 앞에것을 덮어씌움
