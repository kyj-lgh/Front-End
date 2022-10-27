'use strict';

const ip = `http://3.39.226.145:8000`;

const local_username = window.localStorage.getItem("login-username");
const local_token = window.localStorage.getItem("access-token");

const menu_img = document.getElementById("menu__img");
const menu_name = document.querySelector(".menu__name");
const menu_alcohol = document.querySelector(".menu__alcohol");
const menu_category = document.querySelector(".menu__category");
const menu_ingredient = document.querySelector(".menu__ingredient");

const menuID = {
  recommend: document.querySelector('#menu__Recommend'),
  Non: document.querySelector('#menu__Non'),
  Easy: document.querySelector('#menu__Easy'),
  Normal: document.querySelector('#menu__Normal'),
  Hard: document.querySelector('#menu__Hard'),
  ExtraHard: document.querySelector('#menu__ExtraHard')
};

const ContentID = {
  recommend: document.querySelector('#Recommend__content'),
  Non: document.querySelector('#Non__content'),
  Easy: document.querySelector('#Easy__content'),
  Normal: document.querySelector('#Normal__content'),
  Hard: document.querySelector('#Hard__content'),
  ExtraHard: document.querySelector('#ExtraHard__content')
}

const tabList = document.querySelectorAll('.menu__li');
const menu__content = document.querySelectorAll('.menu__content');

const RECOMMENDCONTENT = document.querySelector("#Recommend__content");

for (let i = 0; i < tabList.length; i++) {
  tabList[i].querySelector('.menu__btn').addEventListener('click', btnCheck);
}

function btnCheck(e) {
  e.preventDefault();
  console.log(e.target)
  for (let i = 0; i < menu__content.length; i++) {
    let menu__ContentItem = menu__content.item(i);
    // menu__ContentItem.classList.add('menu__none');
  }

  const menuTarget = e.target;
  const menuContentChild = menuTarget.nextElementSibling;
  menuContentChild.classList.remove('menu__none');

  if (menuTarget == menuID.recommend) {
    menuRecommend_Write();
  } else if(menuTarget == menuID.Non){
    menu_Write("None", ContentID.Non);
  } else if(menuTarget == menuID.Easy){
    menu_Write("1%~10%", ContentID.Easy);
  } else if(menuTarget == menuID.Normal){
    menu_Write("11%~20%", ContentID.Normal);
  } else if(menuTarget == menuID.Hard){
    menu_Write("21%~30%", ContentID.Hard);
  } else if(menuTarget == menuID.ExtraHard){
    menu_Write("30% 이상", ContentID.ExtraHard);
  }
}

async function menuRecommend_Write() {
  const menuData = await Get_CocktailList();

  let html = "";
  let randomMenuArray = [];
  let recommend_Menu = [];
  for (let i = 0; i < 3; i++) {
    let randomNum = Math.floor(Math.random() * menuData.length);
    if (randomMenuArray.indexOf(randomNum) === -1) {
      randomMenuArray.push(randomNum)
    } else {
      i--;
    }
  }

  for (let i = 0; i < 3; i++) {
    recommend_Menu[i] = menuData[randomMenuArray[i]];
  }

  for (let i = 0; i < 3; i++) {
    html += `
          <div class="container">
            <div id="menu__img">
              <img src="${recommend_Menu[i].image}">
            </div>
            <div id="menu__span">
              <span class="menu__name">${recommend_Menu[i].name}</span>
              <span class="menu__alcohol">${recommend_Menu[i].alcohol}도</span>
              <span class="menu__category">${recommend_Menu[i].cocktail_category}</span>
              <span class="menu__ingredient">${recommend_Menu[i].ingredient.join(", ")}</span>
            </div>
          </div>
          `
  }
  ContentID.recommend.innerHTML = html;

}

async function menu_Write(Category, ContentID) {
  const menuData = await Get_CocktailList();
  let menuArray = [];
  let html = "";
  
  console.log("카테고리 값 : " + Category);
  console.log("콘텐츠ID 값 : " + ContentID)
  console.log("가져온 데이터 값 :" + menuData);
  for(let i=0; i<menuData.length; i++) {
    if(menuData[i].cocktail_category == Category) {
      menuArray.push(menuData[i]);
    }
  }
  console.log("menuArray : " + menuArray);
  
  for(let i=0; i<menuArray.length; i++) {
    html += `
            <div class="container">
              <div id="menu__img">
                <img src="${menuArray[i].image}">
              </div>
              <div id="menu__span">
                <span class="menu__name">${menuArray[i].name}</span>
                <span class="menu__alcohol">${menuArray[i].alcohol}도</span>
                <span class="menu__category">${menuArray[i].cocktail_category}</span>
                <span class="menu__ingredient">${menuArray[i].ingredient.join(", ")}</span>
              </div>
            </div>
          `
  }
  RECOMMENDCONTENT.innerHTML = html;
}

function Get_CocktailList() {
  const url = `${ip}/cocktail`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })

}

  // let html = "";
  // let randomMenuArray = [];
  // let recommend_Menu = [];
  // for (let i = 0; i < 3; i++) {
  //   let randomNum = Math.floor(Math.random() * menuData.length);
  //   if (randomMenuArray.indexOf(randomNum) === -1) {
  //     randomMenuArray.push(randomNum)
  //   } else {
  //     i--;
  //   }
  // }

  // for (let i = 0; i < 3; i++) {
  //   recommend_Menu[i] = menuData[randomMenuArray[i]];
  // }

  // for (let i = 0; i < 3; i++) {
    // html += `
    //         <div id="menu__img">
    //           <img src="${recommend_Menu[i].image}">
    //         </div>
    //         <div id="menu__span">
    //           <span class="menu__name">${recommend_Menu[i].name}</span>
    //           <span class="menu__alcohol">${recommend_Menu[i].alcohol}</span>
    //           <span class="menu__category">${recommend_Menu[i].category}</span>
    //           <span class="menu__ingredient">${recommend_Menu[i].ingredient.join(", ")}</span>
    //         </div>
    //       `
  // }
  // CotentID.recommend.innerHTML = html;

// }

// function menuContentInput() {
//   for (let i = 0; i < menu__content.length; i++) {
//     const menuContentIn = menu__content[i];
//     console.log("menuContentIn : " + menuContentIn);
//     Get_CocktailList(menuContentIn);
//   }
// }

// menuContentInput();

// // 칵테일
// function Get_CocktailList(menuContentIn) {
//   const url = `${ip}/cocktail`;

//   fetch(url)
//   .then((res) =>res.json())
//   .then((data) => {
//     let html = '';
//     const menuContent = {
//     };

//     for(let i=0; i<data.length; i++) {
//        html += `
//         <div id="menu__img">
//           <img src="${menuContent.image = data[i].image}">
//         </div>
//         <div id="menu__span">
//           <span class="menu__name">${menuContent.name = data[i].name}</span>
//           <span class="menu__alcohol">${menuContent.alcohol = data[i].alcohol}</span>
//           <span class="menu__category">${menuContent.category = data[i].cocktail_category}</span>
//           <span class="menu__ingredient">${menuContent.ingredient = data[i].ingredient.join(", ")}</span>
//         </div>
//       `
//     }
//     menuContentIn.innerHTML = html;
//   })
// }

