// function hapus(){
//     var nama = document.getElementById("nama-user").innerText;
//     const namanya = (element) => element == nama;
//     var index = username.findIndex(namanya);

//     username.splice(index,1);
//     var dihapus = document.getElementById(username[index]);
//     dihapus.parentNode.removeChild(dihapus)
//     console.log(username)
// }

// function cari(){
//     var dicar = document.getElementById("tombol-cari").value;
//     const namanya = (element) => element == dicar;
//     console.log(username.findIndex(namanya));
// }

// var x ="", i;
// const list = [['Project Kampus', '9 September'], ["Project Client", "10 September"], ["Kerja", "11 September"]]

// for (i=0; i<list.length; i++) {

//     x = x + `<div class='d-flex flex-row justify-content-center align-items-center todo-list' id='${list[i][0]}'>\
//       <div class='d-flex justify-content-center align-items-center' style='width: 5%;'>\
//         <button class='search' type='submit' data-bs-toggle='modal' data-bs-target='#staticBackdrop1'>\
//           <img src='picture/ceklis.svg' width='20px' height='20px'>\
//         </button>\
//       </div >\
//       <div class='d-flex justify-content-start align-items-center'  style='width: 40%;'>\
//         <div id='nama-user' style='font-size:20px;'>${list[i][0]}</div>\
//       </div>\
//       <div class='d-flex justify-content-start align-items-center'  style='width: 45%;'>\
//           <div style='font-size:20px;'>${list[i][1]}</div>\
//         </div>\
//       <div class='d-flex flex-row justify-content-around'  style='width: 10%;'>\
//         <button class='search' style='background-color:rgba(255, 198, 51, 1)' data-id='${list[i][0]}' type='submit' data-bs-toggle='modal' data-bs-target='#modalForm1'>\
//           <img src='picture/ceklis-bg.svg' width='20px' height='20px'>\
//         </button>\
//         <button class='search' style='background-color:rgba(255, 102, 102, 1)' type='submit' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>\
//           <img src='picture/trash 1.svg' width='20px' height='20px'>\
//         </button>\
//       </div>\
//     </div>
//     `
//     $(document).on("click", ".open-homeEvents", function () {
//       var eventId = $(this).data('id');
//       $('#idHolder').html( eventId );
//     });

// }
// document.getElementById('user-column').innerHTML = x;

// For Function To Add
const todoList = document.getElementById("user-column");
const addToDoForm = document.querySelector(".add-todo-form");

// For Function To Add Todo From Value
const titleValue = document.getElementById("title-value");
const deadlineValue = document.getElementById("deadline-value");

// For Function To Edit
const titleEditValue = document.getElementById("title-value-edit");
const deadlineEditValue = document.getElementById("deadline-value-edit");

// For Functio To Delete
const btnSubmitDelete = document.querySelector(".deletebtn");
const btnSubmitEdit = document.querySelector(".editbtn");
let output = "";

const renderToDo = (todos) => {
    todos.forEach((post) => {
        // Do Loop
        output += `
    <div class='d-flex flex-row justify-content-center align-items-center todo-list' data-id='${post.id}'>\
      <div class='d-flex justify-content-center align-items-center' style='width: 5%;'>\
        <button class='search' type='submit' data-bs-toggle='modal' data-bs-target='#staticBackdrop1'>\
          <img src='picture/ceklis.svg' width='20px' height='20px'>\
        </button>\
      </div >\
      <div class='d-flex justify-content-start align-items-center'  style='width: 40%;'>\
        <div class='classtodotitle' id='nama-user' style='font-size:20px;'>${post.todoname}</div>\
      </div>\
      <div class='d-flex justify-content-start align-items-center'  style='width: 45%;'>\
          <div class='classtododeadline' style='font-size:20px;'>${post.tododeadline}</div>\
        </div>\
      <div class='d-flex flex-row justify-content-around'  style='width: 10%;'>\
        <button class='search' style='background-color:rgba(255, 198, 51, 1)' id="edit-todo" type='submit' data-bs-toggle='modal' data-bs-target='#modalForm1'>\
          <img src='picture/ceklis-bg.svg' width='20px' height='20px'>
        </button>\
        <button class='search' style='background-color:rgba(255, 102, 102, 1)' id='delete-todo' type='submit' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>\
          <img src='picture/trash 1.svg' width='20px' height='20px'>
        </button>\
      </div>\
    </div>
    `;
    });
    todoList.innerHTML = output;
};

const url = "https://613618d38700c50017ef53e3.mockapi.io/ToDoList";

// Get - Read ToDo List
// Method GET
fetch(url) // Fecth Data API
    .then((res) => res.json()) // Convert To JSON
    .then((data) => {
        renderToDo(data);
    });

todoList.addEventListener("click", (e) => {
    e.preventDefault();
    let deleteButtonIsPress = e.target.id == "delete-todo";
    let editButtonIsPress = e.target.id == "edit-todo";

    let id = e.target.parentElement.parentElement.dataset.id;

    // Delete - Remove Existing ToDo
    // Method DELETE
    if (deleteButtonIsPress) {
        btnSubmitDelete.addEventListener("click", (e) => {
            e.preventDefault();
            fetch(`${url}/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then(() => location.reload());
        });
    }

    if (editButtonIsPress) {
        const parent = e.target.parentElement.parentElement;
        let titleContent = parent.querySelector(".classtodotitle").textContent;
        let deadlineContent =
            parent.querySelector(".classtododeadline").textContent;

        titleEditValue.value = titleContent;
        deadlineEditValue.value = deadlineContent;
    }

    // Update - Update Existing ToDo
    // METHOD FETCH
    btnSubmitEdit.addEventListener("click", (e) => {
        e.preventDefault();
        fetch(`${url}/${id}`, {
            method: "PUT", //Method Patch Tidak Bisa Digunakan
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                todoname: titleEditValue.value,
                tododeadline: deadlineEditValue.value,
            }),
        })
            .then((res) => res.json())
            .then(() => location.reload());
    });
});

// Create - Insert ToDo List
// Method POST
addToDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            todoname: titleValue.value,
            tododeadline: deadlineValue.value,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            const dataArr = [];
            dataArr.push(data);
            renderToDo(dataArr);
        })
        .then(() => location.reload());
});
