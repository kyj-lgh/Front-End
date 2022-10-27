const noticeTitle = document.querySelectorAll(".title")
const noticeWrite = document.querySelector(".bt_wrap");

for (let i = 0; i < noticeTitle.length; i++) {
  noticeTitle[i].addEventListener('click', btnCheck);
}

function btnCheck(e) {
  e.preventDefault();
  alert("베타테스트 : 미구현 상태입니다.");
}

noticeWrite.addEventListener('click', btnCheck);