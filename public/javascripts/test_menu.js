'use strict';

const ip = `http://3.39.226.145:8000`;

const local_username = window.localStorage.getItem("login-username"); 

const local_token = window.localStorage.getItem("access-token"); 

// function Get_AdminToken() {
//   const url = `${ip}/account/user/list/`;

//   return fetch(url)
//   .then((res) =>res.json())
//   .then((data) => {
//     for(let i = 0; i<Object.keys(data).length; i++) {
//       if('관리자' === local_username) {
//         const AdminToken = data[i].token;
//         return AdminToken;
//       }
//     }
//   })
// }

// 관리자 토큰 값 뽑아내기
// async function adminCheck() {
//   const adminToken = await Get_AdminToken();

//   console.log("관리자 토큰 값 : " + adminToken);
//   Post_CocktailCategoryCreate(adminToken);
// }

// adminCheck();

// 도수 카테고리
function Get_CocktailCategoryList() {
  const url = `${ip}/cocktail/category/`;

  fetch(url)
  .then((res) =>res.json())
  .then((data) => {console.log(data);})
}

function Post_CocktailCategoryCreate(local_token) {
  console.log("Post_CategoryCreate 내부 : " + local_token);
  fetch(`${ip}/cocktail/category/`, {
    method: 'POST',
    headers: { 
      'Content-Type' : 'application/json',
      Authorization: `token ${local_token}`,
    },
    body: JSON.stringify({
      name: '20~30%',
    })
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
};

// function Pacth_UserEdit(newUser) {
//   fetch(`${edit_ip}/account/user/${newUser.id}/`, 
//   {
//     method: 'POST',
//     headers: { 
//       'Content-Type' : 'application/json',
//       Authorization: `token ${newUser.token}`,
//   },
//     body: JSON.stringify({
//       email: newUser.email,
//       age: newUser.age,
//       username: newUser.name,
//       date_of_birth: newUser.date,
//     })
//   }
// )
// .then((res) => res.json())
// .then((data) => {
//   window.localStorage.removeItem("login-username");
//   window.localStorage.setItem("login-username", data.username)

//   alert("정보를 수정하였습니다!");
//   location.href = "/";
// })
// };

// Post_CocktailCategoryCreate(local_token);
// Get_CocktailCategoryList();

// function Get_UserList() {
//   const url = `${ip}/account/user/list/`;

//   fetch(url)
//   .then((res) =>res.json())
//   .then((data) => {console.log(data);})
// }

// Get_UserList();

const menu_img = document.getElementById("menu_img");
const menu_name = document.querySelector(".menu__name");
const menu_alcohol = document.querySelector(".menu__alcohol");
const menu_category = document.querySelector(".menu__category");
const menu_ingredient = document.querySelector(".menu__ingredient");

// 칵테일 
function Get_CocktailList() {
  const url = `${ip}/cocktail`;

  fetch(url)
  .then((res) =>res.json())
  .then((data) => {
    const menu = {
      img : data[4].image,
      name : data[4].name,
      alcohol : data[4].alcohol,
      category : data[4].category,
      ingredient : data[4].ingredient,
    }
    console.log("html 쿼리 : " + menu_img);
    console.log("menu 오브젝트" + menu.img)
    menu_img.innerHTML = `<img src = "${menu.img}" />`;
    menu_name.innerText = menu.name;
    menu_alcohol.innerText = menu.alcohol;
    menu_category.innerText = menu.category;
    // join 함수로 중간에 공백 넣기
    menu_ingredient.innerText = menu.ingredient.join(" ");
  })
}

Get_CocktailList();