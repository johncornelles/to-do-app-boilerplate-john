const inputs = document.getElementById("input")
const add = document.querySelector("#button")
const ul = document.querySelector("#todolist")


add.onclick = () =>{
    if (inputs.value.trim() ==""){
        alert("Be productive empty task")
    }
    else{
        var li = document.createElement("li")
    li.textContent = inputs.value;
    ul.appendChild(li)
    inputs.value = ""
    var a = document.createElement("a")
    a.textContent = "\u00d7"
    li.append(a)
    var span = document.createElement("span")
    span.textContent = " |Edit"
    a.append(span)
    }
}

ul.addEventListener("click", (e) => {
    if (e.target.tagName == "A"){
        e.target.parentElement.remove();
    }
    if (e.target.tagName == "SPAN") {
        editItem(e);
      }
})

function editItem(e) {
    let li = e.target.parentElement.parentElement;
    let current = li.firstChild.textContent;
    let updated = prompt("Enter new task", current);
    if (updated != null && updated != "") {
      li.firstChild.textContent = updated;
    }
  }