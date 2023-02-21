function myfun(event) {
    event.preventDefault();

    var fname = document.getElementById("Fname").value;
    var lname = document.getElementById("Lname").value;
    var role = document.getElementById("role").value;
    var salary = document.getElementById("salary").value;
    document.getElementById("col1").innerHTML = fname;
    document.getElementById("col2").innerHTML = lname;
    document.getElementById("col3").innerHTML = role;
    document.getElementById("col4").innerHTML = salary;
    
}

function reset() {
    document.getElementById("Fname").value = " ";
    document.getElementById("Lname").value = " ";
    document.getElementById("id").value = " ";
    document.getElementById("salary").value = " ";

}