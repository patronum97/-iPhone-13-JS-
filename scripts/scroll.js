const scrollFunc = () => {
  /* console.log(document) - выводит элемент ; 
console.dir(document) расскрывает в консоле объекты в виде объектов*/
  // console.log(document.querySelector(".header-menu__logo"));
  // document.querySelector(".header-menu__logo").style.border = "1px solid red";
  const links = document.querySelectorAll(".header-menu__item a");
  const linkCharacteristics = document.querySelector(
    ".card-details__link-characteristics"
  );

  const newArray = [...links, linkCharacteristics];

  seamless.polyfill();
  // links.forEach(function (element, index, array) {
  //   console.log(element);
  // });
  newArray.forEach((element) => {
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
        seamless.elementScrollIntoView(
          document.querySelector("#characteristics"),
          {
            behavior: "smooth",
            block: "center",
            inline: "center",
          }
        );
      }
    });
  });
};

scrollFunc();
