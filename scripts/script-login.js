
var admin = document.getElementById("admin").value;
var user = document.getElementById("user").value;

function logintransisi(){
    var dashboardButton = false;
    var alltodolistButton = false;
    var home = "";
    if(admin=="admin"){
        dashboardButton = true;
        alltodolistButton = false;
        home = "./dashboard.html"
    }else if(user=="user"){
        alltodolistButton = true;
        dashboardButton = false;
        home = "./alltodolist.hmtl"
    }
}


logintransisi();

export { dashboardButton, alltodolistButton, home};