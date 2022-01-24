/* console.log(document) - выводит элемент ; 
console.dir(document) расскрывает в консоле объекты в виде объектов*/
// console.log(document.querySelector(".header-menu__logo"));
// document.querySelector(".header-menu__logo").style.border = "1px solid red";
const links = document.querySelectorAll(".header-menu__item a");

seamless.polyfill();
// links.forEach(function (element, index, array) {
//   console.log(element);
// });
links.forEach((element) => {
  element.addEventListener("click", (event) => {
    /*отменяем первональный перескок ссылки*/
    event.preventDefault();
    const id = element.getAttribute("href").substring(1);

    // if (id !== "#") {
    //   const section = document.querySelector(id);
    //   console.log(section);
    // } else {
    //   console.log("У элемента в href стоит просто #");
    // }
    const section = document.getElementById(id);
    if (section) {
      seamless.elementScrollIntoView(section, {
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("У элемента в href стоит просто #");
    }
  });
});
