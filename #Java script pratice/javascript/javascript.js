//hello world program in js
console.log("hello world")


//javascript
document.getElementById("li2").innerHTML = "hello world"

//arthmetic operators
console.log("-------------")
var a = 10;
var b = 20;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;
var h = ++a;
var i = --a;
document.write("Value of a \n", a)
document.write("Value of b \n", b)

document.getElementById("Add").innerHTML = `Addition of ${a} + ${b} = ${c}`;
document.getElementById("sub").innerHTML = `substraction of ${a} + ${b} = ${d}`;
document.getElementById("mul").innerHTML = `multiplication of ${a} + ${b} = ${e}`;
document.getElementById("div").innerHTML = `Division of ${a} + ${b} = ${f}`;
document.getElementById("per").innerHTML = `Percentageof ${a} + ${b} = ${g}`;
document.getElementById("inc").innerHTML = `Increment of ${a} + ${b} = ${h}`;
document.getElementById("dec").innerHTML = ` Decrementof ${a} + ${b} = ${i}`;
console.log(`value of a is ${a} `)
//assignment operator
console.log("-------------")
var aa = 10;
var bb = 20;
console.log(aa >= bb);
console.log(aa <= bb);
console.log(aa = bb);
console.log(aa == bb);
console.log(aa === bb);
console.log(aa != bb);
console.log(aa !== bb);
//logical operators
console.log("-------------")
var aaa = true;
var bbb = false;
if (aaa && bbb) {
    console.log("true")
}
else {
    console.log("false")
}
var aaa = true;
var bbb = true;
if (aaa && bbb) {
    console.log("true")
}
else {
    console.log("false")
}
var aaa = false;
var bbb = true;
if (aaa && bbb) {
    console.log("true")
}
else {
    console.log("false")
}
var aaa = false;
var bbb = false;
if (aaa && bbb) {
    console.log("true")
}
else {
    console.log("false")
}

//---------||-----//
console.log("-------------")
console.log("logical operator ||")
var aaa = true;
var bbb = false;
if (aaa || bbb) {
    console.log("true")
}
else {
    console.log("false")
}
var aaa = true;
var bbb = true;
if (aaa || bbb) {
    console.log("true")
}
else {
    console.log("false")
}
var aaa = false;
var bbb = true;
if (aaa || bbb) {
    console.log("true")
}
else {
    console.log("false")
}
var aaa = false;
var bbb = false;
if (aaa || bbb) {
    console.log("true")
}
else {
    console.log("false")
}
//----------^ xor---------//
console.log("-------------")
console.log("logical operator ^")
var aaa = true;
var bbb = false;
if (aaa ^ bbb) {
    console.log("true")
}
else {
    console.log("false")
}
var aaa = true;
var bbb = true;
if (aaa ^ bbb) {
    console.log("true")
}
else {
    console.log("false")
}
var aaa = false;
var bbb = true;
if (aaa ^ bbb) {
    console.log("true")
}
else {
    console.log("false")
}
var aaa = false;
var bbb = false;
if (aaa ^ bbb) {
    console.log("true")
}
else {
    console.log("false")
}
//-------Conditional statment-------//
console.log("-------------")
console.log("If-else")
var cb = 8;
if (cb < 0 && cb >= 1) {
    console.log("Good morning")
}
else if (cb >= 12 && cb < 17) {
    console.log("good cbfternoon")
}
else if (cb >= 17 && cb < 21) {
    console.log("Good Evening")
}
else if (cb >= 21 && cb <= 23) {
    console.log("Good night")
}
else {
    console.log("plecbse enter cb valid time")
}
//switch 
console.log("-------------")
console.log("Switch statment example")
let month = 2;
let result = '';
switch (month) {
    case 1:
        result = 'January'
        break;
    case 2:
        result = 'Feburary'
        break;
    case 3:
        result = 'March'
        break;
    case 4:
        result = 'April'
        break;
    case 5:
        result = 'May'
        break;
    case 6:
        result = 'June'
        break;
    case 7:
        result = 'July'
        break;
    case 8:
        result = 'August'
        break;
    case 9:
        result = 'September'
        break;
    case 10:
        result = 'October'
        break;
    case 11:
        result = 'November'
        break;
    case 12:
        result = 'December'
        break;
        default:
            result="enter proper number"
}
console.log(result)
console.log("-------------")
//loops//
console.log("for Loops")
let number = 5;
result = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n'
}
console.log(result)



let number_1 = 5;
result = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        result += `${j}`;
    }
    result += '\n'
}
console.log(result)
console.log("-------------")
