'use strict';

const local_username = window.localStorage.getItem("login-username"); 

const edit_UserToken = window.localStorage.getItem("access-token");

const editForm = document.querySelector('.edit__form');
const userEmail = editForm.querySelector('.edit__email');
const userAge = editForm.querySelector('.edit__age');
const userName = editForm.querySelector('.edit__username');
const userDate = editForm.querySelector('.edit__date');


const edit_ip = `http://3.39.226.145:8000`;

function Get_UserList() {
  const url = `${edit_ip}/account/user/list/`;

  return fetch(url)
  .then((res) =>res.json())
  .then((data) => {
    for(let i = 0; i<Object.keys(data).length; i++) {
      if(data[i].username === local_username) {
        userEmail.value = data[i].email;
        userAge.value = data[i].age;
        userName.value = data[i].username;
        userDate.value = data[i].date_of_birth;
      }
    }
  })
}



function Get_UserAdmin() {
  const url = `${edit_ip}/account/user/list/`;

  return fetch(url)
  .then((res) =>res.json())
  .then((data) => {
    for(let i = 0; i<Object.keys(data).length; i++) {
      if(data[i].username === local_username) {
        const userAdminCheck = data[i].is_admin;
        return userAdminCheck;
      }
    }
  })
}


function Get_UserToken() {
  const url = `${edit_ip}/account/user/list/`;

  return fetch(url)
  .then((res) =>res.json())
  .then((data) => {
    for(let i = 0; i<Object.keys(data).length; i++) {
      if(data[i].username === local_username) {
        const userToken = data[i].token;
        return userToken;
      }
    }
  })
}

function Get_UserId() {
  const url = `${edit_ip}/account/user/list/`;

  return fetch(url)
  .then((res) =>res.json())
  .then((data) => {
    for(let i = 0; i<Object.keys(data).length; i++) {
      if(data[i].username === local_username) {
        const userId = data[i].id;
        return userId;
      }
    }
  })
}


async function userEditHandler(event) {
  event.preventDefault();
  const newUser = {
    email : userEmail.value,
    age : userAge.value,
    name : userName.value,
    date : userDate.value,
  };
  newUser.id = await Get_UserId();
  newUser.token = await Get_UserToken();

  Pacth_UserEdit(newUser);
}

function Pacth_UserEdit(newUser) {
  fetch(`${edit_ip}/account/user/${newUser.id}/`, 
  {
    method: 'PATCH',
    headers: { 
      'Content-Type' : 'application/json',
      Authorization: `token ${newUser.token}`,
  },
    body: JSON.stringify({
      email: newUser.email,
      age: newUser.age,
      username: newUser.name,
      date_of_birth: newUser.date,
    })
  }
)
.then((res) => res.json())
.then((data) => {
  window.localStorage.removeItem("login-username");
  window.localStorage.setItem("login-username", data.username)

  alert("정보를 수정하였습니다!");
  location.href = "/";
})
};

Get_UserList();

editForm.addEventListener("submit", userEditHandler);