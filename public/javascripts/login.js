'use strict';

const loginForm = document.querySelector('.login__form');
const userEmail = loginForm.querySelector('.login__email');
const userPasswd = loginForm.querySelector('.login__passwd');
let check_username;

const ip = `http://3.39.226.145:8000`;

function userLoginHandler(event) {
  event.preventDefault();
  const newUserEmail = userEmail.value;
  const newUserPasswd = userPasswd.value;
  Post_UserLogin(newUserEmail, newUserPasswd);
}

function Post_UserLogin(userEmail, userPasswd) {
  fetch(`${ip}/account/user/login/`, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify({
      email: userEmail,
      password: userPasswd,
    })
  }
)
  .then((res) => res.json())
  .then((data) => {
    if(data.token) {
      localStorage.setItem('access-token', data.token);
      Get_UserList(data.token);

      alert("로그인에 성공 했습니다!");
      location.href='/';
    } else {
      alert("어,, 일단 이메일 비번 다시 적어봐요,,")
    }
  })

};


function Get_UserList(token) {
  const url = `${ip}/account/user/list/`;

  fetch(url)
  .then((res) =>res.json())
  .then((data) => {
    while(!check_username) {
      for(let i = 0; i<Object.keys(data).length; i++) {
        if(data[i].token === token) {
          console.log(data[i].username);

          localStorage.setItem('login-username', data[i].username);
          check_username = window.localStorage.getItem('login-username');
        }
      }
    }
  })
}

loginForm.addEventListener("submit", userLoginHandler);