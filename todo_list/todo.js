let task = [];
function addtodo(){
    task = document.getElementById("task-input").value;
    let check = "<input type='checkbox'/>"
    document.getElementById("task").innerHTML += '<li>'+ task +"  " +check+'</li>' ;
}

function deltodo(){
    document.getElementById("task").innerHTML = '';   
}