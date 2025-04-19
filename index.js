const buttonJp = document.querySelector('#btn-jp');
const buttonEn = document.querySelector('#btn-en');
const japanese = document.querySelector('.japanese');
const english = document.querySelector('.english');
const navJp = document.querySelector('#nav-jp');
const navEn = document.querySelector('#nav-en');
const logoLink = document.getElementById("tab-profile");

buttonJp.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
  english.style.display = "none";
  japanese.classList.remove("d-none");
  buttonJp.classList.add("active");
  buttonEn.classList.remove("active");
  navJp.classList.remove("d-none");
  navEn.classList.add("d-none");
  logoLink.setAttribute("href", "#top-jp");
  // ページ遷移の場合
  // window.location.href = '/index_jp.html';
})

buttonEn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
  japanese.classList.add("d-none");
  english.style.display = "block";
  buttonEn.classList.add("active");
  buttonJp.classList.remove("active");
  navEn.classList.remove("d-none");
  navJp.classList.add("d-none");
  logoLink.setAttribute("href", "#top");
})
