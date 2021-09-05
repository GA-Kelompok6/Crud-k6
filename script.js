const signUpBtn = document.getElementById('signUp');
const loginBtn = document.getElementById('login');
const container = document.getElementById('container');

signUpBtn.addEventListener('click', () => {
   container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
   container.classList.remove("active");
});


// -----------API---------------
const button = document.querySelector('.button');

const api_URL = '';

async function users() {
   const response = await fetch(api_URL);
   const data = await response.json();

   return data;
}

function login(username, password) {
   if (typeof username == 'string' && typeof password == 'string' && username.length > 0 && password.length > 0) {
      var loggeduser;

      for (var index in users) {
         var user = users[index];

         if (username === user.email && password === user.password)
            loggeduser = user;
      }
   }
}


document.getElementById('loginForm').addEventListener('submit', function (e) {
   e.preventDefault();

   var username_element = e.elements.username;
   var password_element = e.elements.password;

   if (username_element && password_element) {
      username = username_element.value;
      password = password_element.value;

      var user = login(username, password);

      if (user !== false) {
         username_element.value = '';
         password_element.value = '';

         alert('SUKSES')
      } else {
         username_element.value = '';
         password_element.value = '';

         alert("GAGAL");
      }

   }
})