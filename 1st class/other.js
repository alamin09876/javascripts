


var department = document.querySelector("#department");

department.addEventListener("change", handlerDepartment);
function handlerDepartment(e){
    console.log("Checked");
    console.log(e.target.value);
}

