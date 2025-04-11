const buttonJp = document.querySelector('#btn-jp');
const buttonEn = document.querySelector('#btn-en');

buttonJp.addEventListener("click", (event) => {
  event.preventDefault();
  // ページ遷移
  console.log("clicked");
  window.location.href = '/index_jp.html';
})

buttonEn.addEventListener("click", (event) => {
  event.preventDefault();
  // ページ遷移
  console.log("clicked");
  window.location.href = '/index_en.html';
})
