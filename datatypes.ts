let lname : string = "John";
let newname = lname.toUpperCase();
console.log(newname)

let age : number;
age = 20;
let dob : string = "20";
//console.log(age);
//console.log(dob);

let result = parseInt(dob);
//console.log(result);

result += age;
//console.log(result);

let isvalid : boolean;
isvalid = true;
//console.log(isvalid);

let emptylist = []; // this is an any datatype

let listb : Array<string>;
listb = ["John", "Doe"];
let listc : Array<number>;
listc = [1,2,3,4,5];

let results = listc.filter((num)=> num >2);
//console.log(results);

let reduction = listc.reduce((acc, num) => acc + num);
//console.log(reduction);

let user_b = {name: "John", age: 20, email:"john.doe@email.com"}; // let initiate an object

console.log(typeof user_b);

