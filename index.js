const buttonJp = document.querySelector('#btn-jp');
const buttonEn = document.querySelector('#btn-en');
const japanese = document.querySelector('.japanese');
const english = document.querySelector('.english');
const tabContact = document.querySelector('#tab-contact');
const tabSkills = document.querySelector('#tab-skills');
const tabProjects = document.querySelector('#tab-projects');
// const contact = document.querySelector('#contact');
// const skills = document.querySelector('#skills');
// const projects = document.querySelector('#projects');


// 日本語対応していない




buttonJp.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
  english.style.display = "none";
  japanese.classList.remove("d-none");
  buttonJp.classList.add("active");
  buttonEn.classList.remove("active");
  // ページ遷移
  // window.location.href = '/index_jp.html';
})

buttonEn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
  japanese.classList.add("d-none");
  english.style.display = "block";
  buttonEn.classList.add("active");
  buttonJp.classList.remove("active");
  // ページ遷移
  // window.location.href = '/index_en.html';
})

tabProfile.addEventListener("click", (event) => {
  // event.preventDefault();
  console.log("clicked");
  tabContact.classList.add("active");
  tabSkills.classList.remove("active");
  tabProjects.classList.remove("active");
})


tabSkills.addEventListener("click", (event) => {
  // event.preventDefault();
  console.log("clicked");
  tabContact.classList.remove("active");
  tabSkills.classList.add("active");
  tabProjects.classList.remove("active");
})

tabProjects.addEventListener("click", (event) => {
  // event.preventDefault();
  console.log("clicked");
  tabContact.classList.remove("active");
  tabSkills.classList.remove("active");
  tabProjects.classList.add("active");
})
