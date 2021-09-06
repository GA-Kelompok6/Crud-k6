
function hapus(){
    var nama = document.getElementById("nama-user").innerText;
    const namanya = (element) => element == nama;
    var index = username.findIndex(namanya);
    
    username.splice(index,1);
    var dihapus = document.getElementById(username[index]);
    dihapus.parentNode.removeChild(dihapus)
    console.log(username)
}

function cari(){
    var dicar = document.getElementById("tombol-cari").value;
    const namanya = (element) => element == dicar;
    console.log(username.findIndex(namanya));
}


var x ="", i;
const username = ["ridho", "lalal","sam", "kelvin", "ellisa","abdul", "kodir", "jaelani","saifuil"]

for (i=0; i<username.length; i++) {

    x = x + `<div class='d-flex flex-row justify-content-center align-items-center' id='${username[i]}'>\
      <div class='d-flex justify-content-center align-items-center' style='width: 5%;'>\
        <button class='search' type='submit' data-bs-toggle='modal' data-bs-target='#staticBackdrop1'>\
          <img src='picture/ceklis.svg' width='20px' height='20px'>\
        </button>\
      </div >\
      <div class='d-flex justify-content-start align-items-center'  style='width: 40%;'>\
        <div id='nama-user' style='font-size:20px;'>${username[i]}</div>\
      </div>\
      <div class='d-flex justify-content-start align-items-center'  style='width: 45%;'>\
          <div style='font-size:20px;'>Active</div>\
        </div>\
      <div class='d-flex flex-row justify-content-around'  style='width: 10%;'>\
        <button class='search' style='background-color:rgba(255, 198, 51, 1)' type='submit' data-bs-toggle='modal' data-bs-target='#modalForm1'>\
          <img src='picture/ceklis-bg.svg' width='20px' height='20px'>\
        </button>\
        <button class='search' style='background-color:rgba(255, 102, 102, 1)' type='submit' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>\
          <img src='picture/trash 1.svg' width='20px' height='20px'>\
        </button>\
      </div>\
    </div>`

}
document.getElementById('user-column').innerHTML = x;