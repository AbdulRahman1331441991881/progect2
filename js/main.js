 let list = document.querySelector("header main .fa-solid")
list.onclick = function () {
  this.classList.toggle("fa-beat");
  document.querySelector("header main ul").classList.toggle("open");
};
function active(Element) {
  Element.target.parentElement.querySelectorAll(".active").forEach((event) => {
    event.classList.remove("active");
  });
  Element.target.classList.add("active");
}
let li = document.querySelectorAll("header main ul li a");
li.forEach((event) => {
  event.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.toggle).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// document.addEventListener('click', (e) => {
//     if (list !== e.target) {
//          console.log( document.querySelector("header main ul").classList.toggle("open"));

//     }
// })
let imgs = document.querySelectorAll("header .tetle img");
let h1 = document.querySelector("header .tetle h1");
let over = document.querySelector("header .overlow");
let contect = document.querySelector("header .tetle  .contect");
setInterval(() => {
  contect.style.marginBottom = window.screenY + window.pageYOffset + "px";
  over.style.marginTop   = window.screenY - window.pageYOffset + "px";
  over.style.marginLeft = window.screenY + window.pageYOffset + "px";
  imgs[0].style.marginTop = window.screenY + window.pageYOffset + "px";
  imgs[1].style.marginBottom = window.screenY - window.pageYOffset + "px";
  imgs[2].style.marginBottom = window.screenY - window.pageYOffset + "px";
  imgs[4].style.marginLeft = window.screenY + window.pageYOffset + "px";
  imgs[5].style.marginBottom = window.screenY + window.pageYOffset + "px";
  // imgs[0].style.marginRight= window.screenX + window.pageYOffset + "px";
  h1.style.fontSize = window.screenY + window.pageYOffset + "px";
}, 1000);
