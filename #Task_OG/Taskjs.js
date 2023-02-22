let selectedRow = null;
function onFormSubmit() {
    let formdata = readFormdata();
    console.log(formdata)
    if (selectedRow == null) {
        console.log(formdata)
        inseRnewrec(formdata)
    }
    else{
        updateData(formdata);
    }
    resetForm();
};
//Getting the data from the form input
function readFormdata() {
    let formdata = {};
    formdata["p_details"] = document.getElementById("p_details").value;
    formdata["p_bRand"] = document.getElementById("p_bRand").value;
    formdata["p_nAme"] = document.getElementById("p_nAme").value;
    formdata["p_Model"] = document.getElementById("p_Model").value;
    formdata["p_color"] = document.getElementById("p_color").value;
    formdata["prize"] = document.getElementById("prize").value;
    return( formdata);
}
function inseRnewrec(data) {
    let table = document.getElementById("table-data").getElementsByTagName('tbody')[0]
    let newRow = table.insertRow(table.length);

    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.p_details;

    let cell2 =newRow.insertCell(1);
    cell2.innerHTML = data.p_bRand;

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.p_nAme;

    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.p_Model;


    let cell5 =newRow.insertCell(4);
    cell5.innerHTML = data.p_color;

    let cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.prize;

    let cell7 = newRow.insertCell(6);;
    cell7.innerHTML = `<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>`
}

//Edit the form
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("p_details").value=selectedRow.cells[0].innerHTML;
    document.getElementById("p_bRand").value=selectedRow.cells[1].innerHTML;
    document.getElementById("p_nAme").value=selectedRow.cells[2].innerHTML;
    document.getElementById("p_Model").value=selectedRow.cells[3].innerHTML;
    document.getElementById("p_color").value=selectedRow.cells[4].innerHTML;
    document.getElementById("prize").value=selectedRow.cells[5].innerHTML;
}
function updateData(formdata){
selectedRow.cells[0].innerHTML=formdata.p_details;
selectedRow.cells[1].innerHTML=formdata.p_bRand;
selectedRow.cells[2].innerHTML=formdata.p_nAme;
selectedRow.cells[3].innerHTML=formdata.p_Model;
selectedRow.cells[4].innerHTML=formdata.p_color;
selectedRow.cells[5].innerHTML=formdata.prize;
}

//delete r remove 
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
    row = td.parentElement.parentElement;
    //console.log("mytable",row.cells[4].innerHTML)
    document.getElementById("table-data").deleteRow(row.rowIndex);
    let a = row.cells[4].innerHTML
    resetForm();
    }
}
// Reset function
function resetForm(){
    document.getElementById("p_details").value=" ";
    document.getElementById("p_bRand").value=" ";
    document.getElementById("p_nAme").value=" ";
    document.getElementById("p_Model").value=" ";
    document.getElementById("p_color").value=" ";
    document.getElementById("prize").value=" ";
}