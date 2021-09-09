const signUpBtn = document.getElementById("signUp");
const loginBtn = document.getElementById("login");
const container = document.getElementById("container");

signUpBtn.addEventListener("click", () => {
   container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
   container.classList.remove("active");
});

// -----------API---------------
function Login() {
   let emailInput = document.getElementById("email").value;
   let passInput = document.getElementById("pass").value;

   fetch("https://613846baeac1410017c185a2.mockapi.io/UserAdmin")
      .then((response) => response.json())
      .then((result) => {
         let user = result.filter((item) => item.email === emailInput);
         console.log(  user );

         if (user.length > 0) {
            if (user[0].password === passInput) {
               localStorage.setItem("user", JSON.stringify(user[0]));
               alert("Login Berhasil");
               if (user[0].role === 'admin') {
                  window.location.replace("././dashboard.html");
                  localStorage.setItem(user[0].username, user[0].role);
                  console.log("admin")
               } else {
                  window.location.replace("././alltodolist.html");
                  localStorage.setItem(user[0].username, user[0].role);
                  console.log("user")
               }

            } else {
               alert("Password Salah");
               document.getElementById("pass").value = "";
            }
         } else {
            alert("Email tidak ditemukan");
         }
      });

   // document.getElementById("email").value = '';
}

function Signup() {
   let nameInput = document.getElementById("nameSignup").value;
   let emailInput = document.getElementById("emailSignup").value;
   let passInput = document.getElementById("passSignup").value;
   let roleInput = document.querySelector('input[name="role"]:checked').value;

   console.log(roleInput);

   if (nameInput === "" || nameInput === null) {
      alert("Harap memasukkan nama");
      return false;
   }

   if (emailInput === "" || emailInput === null) {
      alert("Harap memasukkan email");
      return false;
   } else {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!mailformat.test(emailInput)) {
         alert("Harap memasukkan email dengan benar");
         return false;
      }
   }

   if (passInput === "" || passInput === null) {
      alert("Harapa memasukkan password");
      return false;
   } else {
      if (passInput.length < 6) {
         alert("Password minimal 6 karakter");
         return false;
      }
   }


   fetch("https://613846baeac1410017c185a2.mockapi.io/UserAdmin", {
      method: "POST",
      body: JSON.stringify({
         email: emailInput,
         username: nameInput,
         password: passInput,
         role: roleInput
      }),
      headers: {
         "Content-Type": "application/json; charset=UTF-8",
      },
   })
      .then((response) => response.json())
      .then((result) => {
         console.log(result);
         alert("Pendaftaran berhasil. Silahkan login");
      });
   document.getElementById("nameSignup").value = "";
   document.getElementById("emailSignup").value = "";
   document.getElementById("passSignup").value = "";
}

function Logout() {
   localStorage.clear();
   window.location.replace('././index.html')
}

function Forget() {
   let emailInput = document.getElementById("email").value;
   let passInput = document.getElementById("pass").value;
   console.log(passInput);

   fetch("https://613846baeac1410017c185a2.mockapi.io/UserAdmin")
      .then((response) => response.json())
      .then((result) => {
         let user = result.filter((item) => item.email === emailInput);
         console.log(user);
         if (user.length > 0) {
            if (user[0].email === emailInput) {
               console.log(user.email)
            }
         } else {
            alert("Email tidak ditemukan");
         }
      });
}
