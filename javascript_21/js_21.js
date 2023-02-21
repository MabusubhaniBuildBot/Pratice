//date object
console.log("--------------------------------")
console.log("Date Objects")
let date = new Date();
console.log(date)
//current date
let presentDate = new Date().toLocaleDateString();
console.log(presentDate)
//current time
let presenttime = new Date().toLocaleTimeString();
console.log(presenttime)
//Another country date
let udate = { timeZone: 'america/new_york' };
let usadate = new Date().toLocaleDateString('en-US', udate);
console.log(usadate)
//Another country time
let utime = { timeZone: 'america/new_york' };
let usatime = new Date().toLocaleTimeString('en-US', utime);
console.log(usatime)
//getting day
let day = new Date().getDay();
let today = ''
switch (day) {
    case 0:
        today = 'Sunday';
        break;
    case 1:
        today = 'Monday';
        break;
    case 2:
        today = 'Tuesday';
        break;
    case 3:
        today = 'Wednseday';
        break;
    case 4:
        tday = 'Thursday';
        break;
    case 5:
        today = 'Friday';
        break;
    case 6:
        today = 'Saturday';
        break;
}
console.log(`Today is ${today}`)
console.log(`Current time is ${presenttime}`)
//change event
//event listener
let box = document.getElementById("select-box");
addEventListener('change', function () {
    let options = document.getElementById("select-box").value;
    console.log(options)
    this.document.getElementById("select-option").innerHTML = (options);

});


//local storage
//set item();
let name_1 = "svsdfsdfsd_1";
localStorage.setItem('emp_1', name_1)
let name_2 = "svssdfaf_2";
localStorage.setItem('emp_2', name_2)
let name_3 = "ssdfsdfdfsdfsd_3";
localStorage.setItem('emp_3', name_3)
let name_4 = "svsdfsdfdfsd_4";
localStorage.setItem('emp_4', name_4)

//get item();
console.log(localStorage.getItem('emp_1'))
console.log(localStorage.getItem('emp_2'))
console.log(localStorage.getItem('emp_3'))
console.log(localStorage.getItem('emp_4'))
//delete item()
localStorage.removeItem('emp_1')
//Object
let a = {
    id: 1,
    class: 12312,
    mkdmskms: 'asdasd'
}
localStorage.setItem('id_', JSON.stringify(a))

let b = {
    id: 2,
    class: 122,
    mkdmskms: 'asdasd'
}
localStorage.setItem('id_2', JSON.stringify(a))

let c = {
    id: 3,
    class: 12432,
    mkdmskms: 'asdasd'
}
localStorage.setItem('id_3', JSON.stringify(a))

let d = {
    id: 4,
    class: 1232412,
    mkdmskms: 'asdasd'
}
localStorage.setItem('id_4', JSON.stringify(a))

let e = {
    id: 5,
    class: 122342,
    mkdmskms: 'asdasd'
}
localStorage.setItem('id_5', JSON.stringify(a))
console.log(JSON.parse(localStorage.getItem(a)))