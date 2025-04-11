const buttonJp = document.querySelector('#btn-jp');
const buttonEn = document.querySelector('#btn-en');
const japanese = document.querySelector('.japanese');
const english = document.querySelector('.english');


buttonJp.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
  english.style.display = "none";
  japanese.style.display = "block";
  // ページ遷移
  // window.location.href = '/index_jp.html';
})

buttonEn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
  japanese.style.display = "none";
  english.style.display = "block";
  // ページ遷移
  // window.location.href = '/index_en.html';
})
