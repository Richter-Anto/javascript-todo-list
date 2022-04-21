let list = document.querySelector(".list"); //here list content will be added
let btn = document.querySelector(".btn"); //adding button
let list_item_num = 0; //targetting each list item using this number

btn.addEventListener("click", addinglist);

function addinglist() {
  let search_value = document.getElementById("search").value;
  list.innerHTML += `<div class="list_item"> <p class="list_update"> <span class="list_edit">Edit</span> <span class="list_delete" id="${list_item_num++}">Delete</span></p> <p>${search_value}</p> </div>`; // adding list items

  list_item_btn_create(); //added click listener to edit and delete buttons
}

let list_edit = document.getElementsByClassName("list_edit"); //edit button
let list_delete = document.getElementsByClassName("list_delete"); //delete button

function list_item_btn_create() {
  for (let i = 0; i < list_edit.length; i++) {
    list_edit[i].addEventListener("click", function () {
        this.parentElement.nextElementSibling.contentEditable = true;
        this.parentElement.nextElementSibling.setSelectionRange = "end";
        this.parentElement.nextElementSibling.spellcheck = false;
        this.parentElement.nextElementSibling.focus();
    });
      list_delete[i].addEventListener("click", function () {
          list.removeChild(this.parentElement.parentElement);
    });
  }
}

let list_item = document.getElementsByClassName("list_item"); //all list items

