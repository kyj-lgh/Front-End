'use strict';

const signupForm = document.querySelector('.signup__form');
const userEmail = signupForm.querySelector('.signup__email');
const userAge = signupForm.querySelector('.signup__age');
const userName = signupForm.querySelector('.signup__username');
const userDate = signupForm.querySelector('.signup__date');
const userPasswd = signupForm.querySelector('.signup__passwd');

const ip = `http://3.39.226.145:8000`;

async function userSignupHandler(event) {
  event.preventDefault();
  const newUser = {
    email : userEmail.value,
    age : userAge.value,
    username : userName.value,
    date : userDate.value,
    passwd : userPasswd.value,
  }

  const check_user = await Get_CheckUserEmail(newUser)
  if(check_user) {
    Post_UserSignup(newUser);
  }
}

function Get_CheckUserEmail(newUser) {
  const url = `${ip}/account/user/list/`;
  let check = true;
  return fetch(url)
  .then((res) =>res.json())
  .then((data) => {
    for(let i = 0; i<Object.keys(data).length; i++) {
      if(data[i].email === newUser.email) {
        alert("중복된 이메일이 있습니다.");
        check = false;
      }
      if(data[i].username === newUser.username) {
        alert("중복된 닉네임이 있습니다.");
        check = false;
      }
    }
    return check;
  })
}

function Post_UserSignup(newUser) {
  fetch(`${ip}/account/user/create/`, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify({
      email: newUser.email,
      age: newUser.age,
      username: newUser.username,
      date_of_birth: newUser.date,
      password: newUser.passwd,
    })
  }
)
  .then((res) => res.json())
  .then((data) => {
    if(data.token) {
      alert("회원가입에 성공하셨습니다!");
      location.href='/';
    } else {
      alert("어,, 일단 이메일 비번 다시 적어봐요,,");
    }
  })
  .catch((error) => console.log(`error : ${error}`))
};

signupForm.addEventListener("submit", userSignupHandler);

