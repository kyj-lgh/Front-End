'use strict'

// let obj = {
//   name : "youngjoo",
//   age : 22,
//   greeting : (name) => {
//     console.log(`나는 ${name} 입니다. 안녕하세요.`)
//   }
// }

// console.log(obj.name);

// let man_json = JSON.stringify(obj)
// console.log(man_json);

// let man_obj = JSON.parse(man_json);
// console.log(man_obj);

// const HI = obj.greeting("zz");

// // 콜백을 활용해 자기가 원하는 데이터와 값을 뽑아낼 수 있음
// const manJSON_Name = JSON.stringify(obj, ['name']);

// console.log(manJSON_Name);

const ip = `http://3.39.226.145:8000`;

function Get_UserList() {
  const url = `${ip}/account/user/list/`;

  fetch(url)
  .then((res) =>res.json())
  .then((data) => {console.log(data);})
}


function Post_UserCreate() {
  fetch(`${ip}/account/user/create/`, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify({
      email: 'test01@test.com',
      age: '23',
      username: "테스트01",
      date_of_birth: "2022-01-01",
      password: "1234",
    })
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
};

function Post_UserLogin() {
  fetch(`${ip}/account/user/login/`, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify({
      email: 'test00@test.com',
      password: "1234",
    })
  }
)
  .then((res) => res.json())
  // .catch((error) => console.log(`error : ${error}`))
  .then((data) => {console.log(data)})
};

// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZ…DUwfQ.95FpJKadkfOLLX0e9LC5iufkgYci95FUysJwnz8eXYc'

function Pacth_UserEdit() {
  fetch(`${ip}/account/user/edit/`, {
    method: 'PATCH',
    headers: { 
      'Content-Type' : 'application/json',
      Authorization: 'token : ' + token,
  },
    body: JSON.stringify({
      username: '테스트01',
    })
  }
)
  .then((res) => res.json())
  .then((data) => {console.log(data)})
};

// Get_UserList();

// Post_UserCreate();

// Post_UserLogin();

// Pacth_UserEdit();

// 칵테일
function Get_CocktailList() {
  const url = `${ip}/cocktail`;

  fetch(url)
  .then((res) =>res.json())
  .then((data) => {console.log(data);})
}


function Post_CocktailCreate() {
  fetch(`${ip}/cocktail`, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify({
      cocktail_category: '1~10%',
      name: '깔루아 밀크',
      alcohol: "21",
      ingredient: ["깔루아", "우유"],
    })
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
};

// Get_CocktailList();
// Post_CocktailCreate();
// Get_CocktailCategoryList();

// const NEWURL = 'https://mycocktail.shop/'
// function Get_NewUrlUserList() {
//   const url = `${NEWURL}/account/user/list/`;

//   fetch(url)
//   .then((res) =>res.json())
//   .then((data) => {console.log(data);})
// }

// Get_NewUrlUserList();

// 게시판
function Get_PostsList() {
  const url = `${ip}/posts`;

  fetch(url)
  .then((res) =>res.json())
  .then((data) => {console.log(data);})
}

Get_PostsList();