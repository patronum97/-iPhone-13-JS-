const tabsFanc = () => {
  const tabs = document.querySelectorAll(".card-detail__change");

  const tabsTitle = document.querySelector(".card-details__title");

  const tabsPrice = document.querySelector(".card-details__price");

  const tabsImage = document.querySelector(".card__image_item");

  const titlePage = document.querySelector("title");

  const tabsOptions = [
    {
      name: "Graphite",
      memory: "128",
      price: "60000",
      image: "img/iPhone-graphite.webp",
      title: "Graphite iPhone",
    },
    {
      name: "Silver",
      memory: "256",
      price: "65000",
      image: "img/iPhone-silver.webp",
      title: "Silver iPhone",
    },
    {
      name: "Sierra Blue",
      memory: "512",
      price: "70000",
      image: "img/iPhone-sierra_blue.webp",
      title: "Sierra Blue iPhone ",
    },
  ];

  const changeContent = (index) => {
    tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
    tabsPrice.textContent = `${tabsOptions[index].price}₽`;
    titlePage.textContent = `${tabsOptions[index].title}`;

    tabsImage.setAttribute("src", tabsOptions[index].image);
  };

  const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
      tab.classList.remove("active");

      if (index === indexClickedTab) {
        tab.classList.add("active");
      }
    });
    changeContent(indexClickedTab);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      changeActiveTabs(index);
    });
  });

  /*чтобы обойти первоначальную цену верстки*/
  changeContent(0);
};

tabsFanc();
