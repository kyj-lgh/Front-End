'use strict';

const access_token = localStorage.getItem("access-token");
const login_username = localStorage.getItem("login-username");

const nav = document.querySelector(".header__nav");
const navLogout = nav.querySelector(".header__logout");

const ip = `http://3.39.226.145:8000`;

function userCheckHandler(access_token) {
  if(access_token) {
    const nav_li = nav.querySelectorAll(".item__on");
    const nav_newli = nav.querySelectorAll(".item__none");
    for(let i=0; i<nav_newli.length; i++) {
        nav_newli[i].classList.remove('item__none');
    }
    for(let i=0; i<nav_li.length; i++) {
        nav_li[i].classList.add('item__none');
    }
    const headerUsername = document.querySelector(".header__username");

    headerUsername.innerText = `${login_username} 님 환영합니다!`
  }
}


function logoutHandler() {
  window.localStorage.removeItem("access-token");
  window.localStorage.removeItem("login-username");
}



userCheckHandler(access_token);

navLogout.addEventListener("click", logoutHandler);