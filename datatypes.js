var lname = "John";
var newname = lname.toUpperCase();
console.log(newname);
var age;
age = 20;
var dob = "20";
//console.log(age);
//console.log(dob);
var result = parseInt(dob);
//console.log(result);
result += age;
//console.log(result);
var isvalid;
isvalid = true;
//console.log(isvalid);
var emptylist = []; // this is an any datatype
var listb;
listb = ["John", "Doe"];
var listc;
listc = [1, 2, 3, 4, 5];
var results = listc.filter(function (num) { return num > 2; });
//console.log(results);
var reduction = listc.reduce(function (acc, num) { return acc + num; });
//console.log(reduction);
var user_b = { name: "John", age: 20, email: "john.doe@email.com" }; // let initiate an object
console.log(typeof user_b);
var empploylist = ["Mike", "John", "Peter"]; // this is an any datatype
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
var c = color.blue;
;
var c2 = 0 /* colorb.purple */;
