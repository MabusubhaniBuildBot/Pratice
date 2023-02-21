let form = document.getElementById("loginform").value;
addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        this.alert("form is submitted successfully")
    }
    else {
        this.alert('somthing went wrong')
    }

});
let validateForm = () => {
    return (CheckUserName() & CheckPassword() & ConPassword());
};
let CheckUserName = () => {
    let userEl = document.getElementById("userid").value;
    let regEp = /^[a-zA-Z0-9]{7,20}$/;
    if (regEp.test(userEl)) {
        document.getElementById("User-feedback").innerHTML = 'Good';
        return true;
    }
    else {
        document.getElementById("User-feedback").innerHTML = 'Pls enter user name';
        return false;
    }
}

let CheckPassword = () => {
    let passwordEl = document.getElementById("password").value;
    let regEp = /^[A-Za-z]\w{7,20}$/;
    if (regEp.test(passwordEl)) {
        document.getElementById("password-feedback").innerHTML = 'Good';
        return true;
    }
    else {
        document.getElementById("password-feedback").innerHTML = 'Pls Enter Password';
        return false;
    }
}
let ConPassword = () => {
    let con_passEl = document.getElementById("conform-password").value;
    let password = document.getElementById("password").value;
    let regEp = /^[A-Za-z]\w{7,20}$/;
    if (regEp.test(con_passEl) && con_passEl === password) {
        document.getElementById("conform-password-feedback").innerHTML = 'Thank YOU';
        return true;
    }
    else {
        document.getElementById("conform-password-feedback").innerHTML = 'Pls Conform  Password';
        return false;
    }
}


function reset() {
    document.getElementById("userid").value = " ";
    document.getElementById("password").value = " ";
    document.getElementById("conform-password").value = " ";
}
function myfun(){
    let password=document.getElementById('password');
    if(password.type=='password'){
        password.type='text'
    }
    else{
        password.type='password';
    }
}
function myFun(){
    let Conpassword=document.getElementById('conform-password');
    if(Conpassword.type=='password'){
        Conpassword.type='text'
    }
    else{
        Conpassword.type='password';
    }
}


