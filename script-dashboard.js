var id_delete;
// Fungsi ini untuk hapus user, dipanggilnya di modal Hapus User.
function hapus(){
    var IDbefore = id_delete;
    var IDfix = IDbefore.slice(5,IDbefore.length);

    const namanya = (element) => element == IDfix;
    var index = username.findIndex(namanya);
    // username.splice(index,1);
    var dihapus = document.getElementById(username[index]);
    dihapus.parentNode.removeChild(dihapus)
    console.log(index)
    id_delete = ""
}

function getID(clicked_id){
    id_delete = clicked_id
}

function getDeleteButtonID(){
  var id = "hapus"+username[i]
  var bt = document.getElementById(id);
  bt.style.color = "blue";
}

// Fungsi ini untuk cari user, dipanggil di tombol search.
function cari(){
    var dicar = document.getElementById("tombol-cari").value;
    if(dicar!=""){
      document.getElementById(dicar).style.backgroundColor = "#d7ff47"
    }
}

var x ="", i;
const username = ["ridho", "lalal","sam", "kelvin", "ellisa","abdul", "kodir", "jaelani","saifuil"]

for (i=0; i<username.length; i++) {
    x = x + `<div class='d-flex flex-row justify-content-center align-items-center' id='${username[i]}'>\
      <!-- TOMBOL CENTANG  -->\
      <div class='d-flex justify-content-center align-items-center' style='width: 5%;'>\
        <button class='search' type='submit' data-bs-toggle='modal' data-bs-target='#staticBackdrop1'>\
          <img src='picture/ceklis.svg' width='20px' height='20px'>\
        </button>\
      </div >\

      <!-- NAMA USER  -->\
      <div class='d-flex justify-content-start align-items-center'  style='width: 40%;'>\
        <div id='nama-user' style='font-size:20px;'>${username[i]}</div>\
      </div>\

      <!-- TULISAN ACTIVE  -->\
      <div class='d-flex justify-content-start align-items-center'  style='width: 45%;'>\
          <div style='font-size:20px;'>Active</div>\
        </div>\

      <!-- SECTION TOMBOL  -->\
      <div class='d-flex flex-row justify-content-around'  style='width: 10%;'>\

        <!-- TOMBOL EDIT  -->\
        <button class='search' style='background-color:rgba(255, 198, 51, 1)' type='submit' onClick='getDeleteButtonID()'>\
          <img src='picture/ceklis-bg.svg' width='20px' height='20px'>\
        </button>\

        <!-- TOMBOL HAPUS  -->\
        <button class='search' id='hapus${username[i]}' onClick='getID(this.id)' style='background-color:rgba(255, 102, 102, 1)' type='submit' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>\
          <img src='picture/trash 1.svg' width='20px' height='20px'>\
        </button>\
      </div>\
    </div>`
}
document.getElementById('user-column').innerHTML = x;