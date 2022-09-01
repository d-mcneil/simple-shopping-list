var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.getElementById("grocery-list");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + " "));
    ul.appendChild(li);
    input.value = "";

    // add toggle done and delete button functionality to new items
    li.addEventListener("click", toggleDone);
    var newDeleteButton = document.createElement("button");
    newDeleteButton.appendChild(document.createTextNode("delete"));
    newDeleteButton.classList.add("delete");
    newDeleteButton.addEventListener("click", deleteListItem);
    li.appendChild(newDeleteButton);
}

function addListAfterClick(event) {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKepyress(event) {
    if (inputLength() > 0 && event.code === "Enter") {
        createListElement();
    }
}

// add toggle done functionality
function toggleDone(event) {
    var source = event.srcElement;
    source.classList.toggle("done");
}

// add delete button functionality
function deleteListItem(event) {
    var source = event.srcElement;
    var parent = source.parentElement;
    parent.remove();
}

// add toggle done and delete button functionality to items already on list
var listItems = document.getElementsByTagName("li");
var deleteButtons = document.getElementsByClassName("delete");
for (var i = 0; i < listItems.length; i++) {
    deleteButtons[i].addEventListener("click", deleteListItem);
    listItems[i].addEventListener("click", toggleDone);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKepyress);
