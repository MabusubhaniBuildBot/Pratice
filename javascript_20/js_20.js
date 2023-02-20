//Objects topic
let employee = {
    emp_name: 'Abcd',
    emp_role: 'S/W',
    emp_salary: 260000,
    emp_id: "B_A12",
    emp_details: {
        emp_age: 29,
        emp_number: 80980909009,
        emp_location: "blajblcd",
        emp_bloodgroup: "CD+",
    }
};
console.log(employee)
console.log("----------------------------------")
//accesing the objects
console.log("accessing the object properties")
console.log(employee.emp_name)
console.log(employee.emp_role)
console.log(employee.emp_id)
console.log(employee.emp_salary)
//accesing nested objects
console.log("----------------------------------")
console.log("Accessing nested object properties")
console.log(employee.emp_details)
console.log(employee.emp_details.emp_age)
console.log(employee.emp_details.emp_number)
console.log(employee.emp_details.emp_location)
console.log(employee.emp_details.emp_bloodgroup)
// CURD operations 
// creation a object
console.log("----------------------------------")
console.log("Creating operation")
let laptop = {}
console.log(laptop)
laptop.brand = "Dell";
laptop.ram = "8GB";
laptop.rom = "512SSD";
laptop.color = "Black";
laptop.gen = "Windows 12th gen";
laptop.prize = 99999;
console.log(laptop)
//update the object properties
console.log("----------------------------------")
console.log("Updating Operation")
laptop.color = "white";
console.log(laptop.color)
laptop.prize = 1000000;
console.log(laptop.prize)
console.log(laptop)
//delete the object proprty
console.log("----------------------------------")
console.log("Deleting Operation")
delete laptop.color;
delete laptop.ram;
console.log(laptop)

//----------Array----------//
let na = [10, 20, 30, 40, 50, "jhbjh", true, "hgcg"]
console.log(na)
//Accesssing the elements in array
console.log("----------------------------------")
console.log("Accessing by using indexs")
console.log(na[0])
console.log(na[1])
console.log(na[2])
console.log(na[3])
console.log(na[4])
console.log(na[5])
console.log(na[6])
console.log(na[7])
//Iteration for loop
console.log("----------------------------------")
console.log("Iteration for loop ")
for (let i = 0; i <= na.length - 1; i++) {
    console.log(na[i])
}
console.log("----------------------------------")
let result = ' '
for (let i = 0; i <= na.length - 1; i++) {
    result += `${na[i]} `
}
console.log(result)
//for in loop 
let a = ' '
for (let i in na) {
    a += `${na[i]} `
}
console.log(a)
//for of loop 
let b = ''
for (let data in na) {
    b += `${na[data]} `
}
console.log(b)
//----------Example for array----------//
let student = [
    {
        rollno: 1,
        stdname: "kjbckb",
        class: 10,
        percentage: 89,
    },

    {
        rollno: 2,
        stdname: "sdvkj bckb",
        class: 10,
        percentage: 29,
    },
    {
        rollno: 3,
        stdname: "asdk jbckb",
        class: 10,
        percentage: 69,
    },
    {
        rollno: 4,
        stdname: "dvkj bckb",
        class: 10,
        percentage: 99,
    },
    {
        rollno: 5,
        stdname: "dvjkjbckb",
        class: 9,
        percentage: 66,
    },
    {
        rollno: 6,
        stdname: "kjbckbsv",
        class: 10,
        percentage: 74,
    },
    {
        rollno: 7,
        stdname: "kjdsvbckb",
        class: 10,
        percentage: 21,
    },
    {
        rollno: 8,
        stdname: "kjbknckb",
        class: 10,
        percentage: 87,
    },
    {
        rollno: 9,
        stdname: "sdkjbckb",
        class: 10,
        percentage: 65,
    },
    {
        rollno: 10,
        stdname: "kjbcdsckb",
        class: 10,
        percentage: 41,
    },
    {
        rollno: 11,
        stdname: "sdkjcvckb",
        class: 9,
        percentage: 65,
    },
    {
        rollno: 12,
        stdname: "sdkjbcvckb",
        class: 10,
        percentage: 19,
    },
    {
        rollno: 13,
        stdname: "sdkcvjbckb",
        class: 10,
        percentage: 65,
    },
    {
        rollno: 14,
        stdname: "sdkvjbckb",
        class: 9,
        percentage: 42,
    },
    {
        rollno: 15,
        stdname: "sdkxzcvjbckb",
        class: 10,
        percentage: 18,
    },
    {
        rollno: 16,
        stdname: "sdkjbxcvckb",
        class: 9,
        percentage: 72,
    },
    {
        rollno: 17,
        stdname: "sdkxcvjbckb",
        class: 10,
        percentage: 35,
    },]
console.log(student)
//-----Getting the names
nam = '';
for (let std of student) {
    nam += `${std.stdname} `
}
console.log(nam)
//grater than 50% students
console.log("-------------------------------")
console.log("Students who  has more  than the 50%")
let above_50 = []
for (let above50 of student) {
    if (above50.percentage >= 50) {
        above_50.push(above50)
    }
}
console.log(above_50)
//less than 50% students
console.log("-------------------------------")
console.log("Students who  has less  than the 50%")
let less_50 = []
for (let less50 of student) {
    if (less50.percentage < 50) {
        less_50.push(less50)
    }
}
console.log(less_50)
//---------------------------//functions//---------------------------//

function greet() {
    console.log("Hello world")
}
greet();
//------------------------
/*function numbers() {
    let num = ''
    for (i = 0; i <= 10; i++) {
        num += `${i} `;
    }
    console.log(num)
}
numbers();*/
//----------------------
function numbers(startnum, endnum) {
    let num = ''
    for (i = startnum; i <= endnum; i += 3) {
        num += `${i} `;
    }
    console.log(num)
}
numbers(10, 20);
numbers(100, 200);
//3types of functions
//Type-1 function (with out any parameters and returning any values)

function wish() {
    console.log("IT is a isolated function")
}
wish();

//function expression
let type1 = function () {
    console.log("Hi im the the first type of function 'isolated function'")
}
type1();
//Type 2 Function with Parameters
let type_2 = function (name, age) {
    let msg = `Hello im ${name} and my age is ${age}`
    console.log(msg)
}
type_2("jhjh", 38);
//Type-3 Functions with parameters and it return the value
let add = function (a, b) {
    let result = 2 * (a + b);
    return result;
}
let sum = add(10, 29);
console.log(sum)
//this key word 
let name = {
    first_name: "Build",
    last_name: "Bot",
    full_name: function () {
        return `${this.first_name} ${this.last_name} `

    }
}
console.log(name.first_name)
console.log(name.last_name)
console.log(name.full_name())
//Nested function
console.log("----------------------------")
console.log("Nested Functions")
let outfn = function () {
    console.log("Im the outer function")
    let infn = function () {
        console.log("Im the inner function")
    }
    infn();
}
outfn();
//Built in array functions//
//shift
console.log("--------------------------------")
console.log("shift()")
let sub = ["a", "bb", "ccc", "dddd", "eeeee", "ffffff"]
console.log(sub)
sub.shift();
console.log(sub)
//unshift
console.log("--------------------------------")
console.log("unshift()")
sub.unshift("A")
console.log(sub)
//push
console.log("--------------------------------")
console.log("push()---> it can push the element at last")
sub.push("abcd")
console.log(sub)
//pop
console.log("--------------------------------")
console.log("pop()---> it can remove the last element  ")
sub.pop()
console.log(sub)
//sort
console.log("--------------------------------")
console.log("sort()--->it can sort the elements in assecending order")
sub.sort()
console.log(sub)
//reverse
console.log("--------------------------------")
console.log("reverse()--->it can sort the elements in reverse order")
sub.reverse()
console.log(sub)
sub.sort()
console.log(sub)

//splice
console.log("--------------------------------")
console.log("splice()--->it can remove and replace the middle of the elements")
sub.splice(3, 1)
console.log(sub)
sub.splice(3, 1, 'mmmm')
console.log(sub)
//join
console.log("--------------------------------")
console.log("join()--->it can join the array elements to string")
let join = sub.join('-')
console.log(join)
//split
console.log("--------------------------------")
console.log("split()--->to split string to array")
let split = join.split('-');
console.log(split)
//----------------------------math objects----------------------------//
console.log("--------------------------------")
console.log("mathobjects")
console.log("--------------------------------")
console.log("Sqareroot")
let sqrt = Math.sqrt(21);
console.log(`Squareroot of${21} is :- ${sqrt}`)
console.log("--------------------------------")
console.log("power")
let power = Math.pow(3, 5);
console.log(`power of 3^5 is :- ${power}`)
console.log("--------------------------------")
console.log("min & max")
let min = Math.min(1, 2, 98798, 23423,0,-20)
console.log(min)
let max = Math.max(1, 2, 98798, 23423,0,-20)
console.log(max)
console.log("--------------------------------")
console.log("random")
let rand=Math.round(Math.random()*10000);
console.log(rand)