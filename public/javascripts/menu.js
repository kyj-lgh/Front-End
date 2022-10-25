'use strict';

const menu_Section = document.querySelector(".section__menu");
const menu_Tab = document.querySelectorAll(".main__tab");

for(let i=0; i<menu_Tab.length; i++) {
  menu_Tab[i].addEventListener("click", function(e) {
    e.preventDefault();
    for(let j=0; j<menu_Tab.length; j++) {
      menu_Tab[j].classList.add("menu__none");
      console.log(menu_Tab[j]);
    }
    menu_Tab[i].classList.remove("menu__none");
    console.log(menu_Tab[i]);
  });
}