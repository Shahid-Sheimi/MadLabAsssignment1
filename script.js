const classNames = {
    TODO_ITEM: "todo-container",
    TODO_CHECKBOX: "todo-checkbox",
    TODO_TEXT: "todo-text",
    TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCounSpan = document.getElementById("unchecked-count");
count = 0;
unchecked = 0;

function newTodo() {
    /*Add Logic for creating a new Todo Item. */
    var New_Item = window.prompt("Enter your Item: ");
    if (New_Item.trim() != "") {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'entered_item';
        checkbox.name = 'entered_item';
        checkbox.value = New_Item;


        var label = document.createElement('label')
        label.htmlFor = New_Item;
        label.appendChild(document.createTextNode(New_Item));

        var br = document.createElement('br');
        list.appendChild(checkbox);
        list.appendChild(label);
        list.append(br);
        count++;
        unchecked++;
        itemCountSpan.innerHTML = count;
    } else {
        alert("Entered Item can`t be empty.");
    }


}