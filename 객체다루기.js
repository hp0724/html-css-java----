const person = {
    name: 'suha',
    age: 20, 
    "phone number": "010-9192-7024",
    printInfo: function (msg) {
        console.log(msg);
    }

};
person.name = `hwang suha`;
person.age = 30;
delete person.age;


// console.log(person.name);
// console.log(person['age']);
// console.log(person["phone number"])
console.log(person)




// 얉은 복사 
const obj = {
    name :'철수 '
};

const obj2 = obj;

delete obj.name;
console.log(obj,obj2)