const buttonJp = document.querySelector('#btn-jp');
const buttonEn = document.querySelector('#btn-en');
const japanese = document.querySelector('.japanese');
const english = document.querySelector('.english');
const navJp = document.querySelector('#nav-jp');
const navEn = document.querySelector('#nav-en');
// const tabContact = document.querySelector('#tab-contact');
// const tabSkills = document.querySelector('#tab-skills');
// const tabProjects = document.querySelector('#tab-projects');

// 日本語対応していない



buttonJp.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");
  english.style.display = "none";
  japanese.classList.remove("d-none");
  buttonJp.classList.add("active");
  buttonEn.classList.remove("active");
  navJp.classList.remove("d-none");
  navEn.classList.add("d-none");
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
  navEn.classList.remove("d-none");
  navJp.classList.add("d-none");
})

// tabProfile.addEventListener("click", (event) => {
//   console.log("clicked");
//   tabContact.classList.add("active");
//   tabSkills.classList.remove("active");
//   tabProjects.classList.remove("active");
// })


// tabSkills.addEventListener("click", (event) => {
//   console.log("clicked");
//   tabContact.classList.remove("active");
//   tabSkills.classList.add("active");
//   tabProjects.classList.remove("active");
// })

// tabProjects.addEventListener("click", (event) => {
//   console.log("clicked");
//   tabContact.classList.remove("active");
//   tabSkills.classList.remove("active");
//   tabProjects.classList.add("active");
// })
