// var id_delete;
// // Fungsi ini untuk hapus user, dipanggilnya di modal Hapus User.
// function hapus(){
//     var IDbefore = id_delete;
//     var IDfix = IDbefore.slice(5,IDbefore.length);

//     const namanya = (element) => element == IDfix;
//     var index = username.findIndex(namanya);
//     // username.splice(index,1);
//     var dihapus = document.getElementById(username[index]);
//     dihapus.parentNode.removeChild(dihapus)
//     console.log(index)
//     id_delete = ""
// }

// function getID(clicked_id){
//     id_delete = clicked_id
// }

// function getDeleteButtonID(){
//   var id = "hapus"+username[i]
//   var bt = document.getElementById(id);
//   bt.style.color = "blue";
// }

// // Fungsi ini untuk cari user, dipanggil di tombol search.
// function cari(){
//     var dicar = document.getElementById("tombol-cari").value;
//     if(dicar!=""){
//       document.getElementById(dicar).style.backgroundColor = "#d7ff47"
//     }
// }

// var x ="", i;
// const username = ["ridho", "lalal","sam", "kelvin", "ellisa","abdul", "kodir", "jaelani","saifuil"]

// for (i=0; i<username.length; i++) {
//     x = x + `<div class='d-flex flex-row justify-content-center align-items-center' id='${username[i]}'>\
//       <!-- TOMBOL CENTANG  -->\
//       <div class='d-flex justify-content-center align-items-center' style='width: 5%;'>\
//         <button class='search' type='submit' data-bs-toggle='modal' data-bs-target='#staticBackdrop1'>\
//           <img src='picture/ceklis.svg' width='20px' height='20px'>\
//         </button>\
//       </div >\

//       <!-- NAMA USER  -->\
//       <div class='d-flex justify-content-start align-items-center'  style='width: 40%;'>\
//         <div id='nama-user' style='font-size:20px;'>${username[i]}</div>\
//       </div>\

//       <!-- TULISAN ACTIVE  -->\
//       <div class='d-flex justify-content-start align-items-center'  style='width: 45%;'>\
//           <div style='font-size:20px;'>Active</div>\
//         </div>\

//       <!-- SECTION TOMBOL  -->\
//       <div class='d-flex flex-row justify-content-around'  style='width: 10%;'>\

//         <!-- TOMBOL EDIT  -->\
//         <button class='search' style='background-color:rgba(255, 198, 51, 1)' type='submit' onClick='getDeleteButtonID()'>\
//           <img src='picture/ceklis-bg.svg' width='20px' height='20px'>\
//         </button>\

//         <!-- TOMBOL HAPUS  -->\
//         <button class='search' id='hapus${username[i]}' onClick='getID(this.id)' style='background-color:rgba(255, 102, 102, 1)' type='submit' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>\
//           <img src='picture/trash 1.svg' width='20px' height='20px'>\
//         </button>\
//       </div>\
//     </div>`
// }
// document.getElementById('user-column').innerHTML = x;

// For Function To Add
const userList = document.getElementById('user-column');
const addUserForm = document.querySelector('#edit-user-form');

// For Function To Add Todo From Value
const usernameValue = document.getElementById('username-value');
const emailValue = document.getElementById('email-value');
const passwordValue = document.getElementById('password-value');

// For Function To Edit
const usernameEditValue = document.getElementById('username-value-edit');
const emailEditValue = document.getElementById('email-value-edit');
const passwordEditValue = document.getElementById('password-value-edit');
const passwordEditRepeateValue = document.getElementById('exampleInputPassword1-edit');
// For Functio To Delete
const btnSubmitDelete = document.querySelector('.deletebtn')
const btnSubmitEdit = document.querySelector('.editbtn');
let output = "";

const renderToDo = (todos) => {
  todos.forEach(post => { // Do Loop
    output += `<div class='d-flex flex-row justify-content-center align-items-center' data-id='${post.id}' id='${post.id}'>\
          <!-- TOMBOL CENTANG  -->\
          <div class='d-flex justify-content-center align-items-center' style='width: 5%;'>\
            <button class='search' type='submit' data-bs-toggle='modal' data-bs-target='#staticBackdrop1' style='display: none;'>\
              <img src='picture/ceklis.svg' width='20px' height='20px'>\
            </button>\
          </div >\
    
          <!-- NAMA USER  -->\
          <div class='d-flex justify-content-start align-items-center'  style='width: 40%;'>\
            <div id='nama-user' class='classuserusername' style='font-size:20px;'>${post.username}</div>\
          </div>\


          <!-- PASSWORD  -->\
          <div style='display: none'>\
            <div id='nama-user' class='classuserpassword' style='font-size:20px;'>${post.password}</div>\
          </div>\
    
          <!-- TULISAN ACTIVE  -->\
          <div class='d-flex justify-content-start align-items-center'  style='width: 45%;'>\
               <div id='nama-user' class='classuseremail' style='font-size:20px;'>${post.email}</div>\
            </div>\
    
          <!-- SECTION TOMBOL  -->\
          <div class='d-flex flex-row justify-content-around'  style='width: 10%;'>\
    
            <!-- TOMBOL EDIT  -->\
            <button class='search' style='background-color:rgba(255, 198, 51, 1)' type='submit' onClick='getDeleteButtonID()' data-bs-toggle='modal' data-bs-target='#modalForm3'>\
              <img id='edit-user' src='picture/edit-icon.png' width='40px' height='40px'>\
            </button>\
    
            <!-- TOMBOL HAPUS  -->\
            <button class='search' style='background-color:rgba(255, 102, 102, 1)' type='submit' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>\
              <img id='delete-user' src='picture/trash-icon.png' width='40px' height='40px'>\
            </button>\
          </div>\
        </div>`})
    userList.innerHTML = output;
}


function sweetalertclick(){
  Swal.fire({
    icon: 'success',
    title: 'Good job!',
    text: 'You clicked the button!',
    footer: '<a href="">More Informations</a>',
    timer: 1500
  })
}

const url = "https://613618d38700c50017ef53e3.mockapi.io/UserAdmin";

// Ini ketriger kalau si input di close
function OnSearch(input){
  location.reload();
        // setTimeout(function(){
          // location.reload()}, 3000);
}

// Fungsi carinnya
function cari(){
  var dicar = document.getElementById("tombol-cari");
  var temp = [];
  var hasil = 0;
  var regexArray = [];
  var renderBool = 0;
  if(dicar.value!=""){
  fetch(url) // Fecth Data API
  .then(res => res.json()) // Convert To JSON
  .then(data => {
    var regx = new RegExp(dicar.value,"gi");
    data.forEach(
    data =>{
      // var pattern = /Ridho/i
      if(data.username.match(regx)==dicar.value){
        regexArray.push(data.username.match(regx))
        hasil++;
        // setTimeout(function(){
        //   location.reload()}, 3000);
        if(banding<=(regexArray.length)){
        temp.push(data);
        // renderToDo(temp);
        // console.log(data.id)
        // console.log(banding);
        banding++;
        }else{
        }
      }
    }
  );
  console.log(temp);
  if(renderBool<1){
    renderToDo(temp);
    renderBool++;
  }
  if(hasil>0){
    // if(banding<<regexArray.length){
      // console.log(banding);
      banding++;
      data.forEach(
        data =>{
          var dihapus = document.getElementById(data.id);
          dihapus.parentNode.removeChild(dihapus)
      }
  )}else{
    Swal.fire({
      icon: 'error',
      title: 'Tidak ditemukan',
      timer: 1500
    })
  }
});
}else{
  Swal.fire({
    icon: 'error',
    title: 'Masukkan keyword',
    timer: 1500
  })
}
}

if(document.getElementById("tombol-cari").value == ""){
fetch(url) // Fecth Data API
  .then(res => res.json()) // Convert To JSON
  .then(data => { renderToDo(data)})
}

userList.addEventListener('click', (e) =>{
  e.preventDefault();
  let deleteButtonIsPress = e.target.id == 'delete-user';
  let editButtonIsPress = e.target.id == 'edit-user';

  let id = e.target.parentElement.parentElement.parentElement.dataset.id;
  console.log(id);

  // Delete - Remove Existing ToDo
  // Method DELETE
  if (deleteButtonIsPress){
    btnSubmitDelete.addEventListener('click', (e) =>{
      e.preventDefault();
      fetch(`${url}/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(() => location.reload())
    })
  }

  if (editButtonIsPress){
    const parent = e.target.parentElement.parentElement.parentElement;
    let usernameContent = parent.querySelector('.classuserusername').textContent;
    let emailContent = parent.querySelector('.classuseremail').textContent;
    let passwordContent = parent.querySelector('.classuserpassword').textContent;

  
    usernameEditValue.value = usernameContent;
    emailEditValue.value = emailContent;
    passwordEditValue.value = passwordContent;
  
}

  // Update - Update Existing ToDo
  // METHOD FETCH
  btnSubmitEdit.addEventListener('click', (e) =>{
    if(passwordEditRepeateValue.value==passwordEditValue.value){
    e.preventDefault();
    fetch(`${url}/${id}`, {
      method: 'PUT', //Method Patch Tidak Bisa Digunakan
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: usernameEditValue.value,
        email: emailEditValue.value,
        password: passwordEditValue.value
      })
    })
      .then(res => res.json())
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          timer: 1500
        })
          setTimeout(function(){
          location.reload()}, 1000);}
        )
    
  }else{
      Swal.fire({
        icon: 'error',
        title: 'Password tidak cocok',
        timer: 1500
      })
    }
  
}
  )
});

// Create - Insert ToDo List
// Method POST
addUserForm.addEventListener('submit', (e) =>{
  if(passwordEditRepeateValue.value==passwordEditValue.value){
  e.preventDefault();
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: usernameValue.value,
      email: emailValue.value,
      password: passwordValue.value
    })
  })
    .then(res => res.json())
    .then(data =>{
      const dataArr = [];
      dataArr.push(data);
      renderToDo(dataArr);
    })
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        timer: 1500
      })
        setTimeout(function(){
        location.reload()}, 1000);})
}else{
  Swal.fire({
    icon: 'error',
    title: 'Password tidak cocok',
    timer: 1500
  })
}
});