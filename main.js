//SELECTORS//
const navEmail = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".burger-menu");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopingCart = document.querySelector(".navbar-shopping-cart");
const shopingCartContainer = document.querySelector("#shopingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

//LISTENERS//
navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shopingCart.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  // desktopMenu.style.display ===  "none" ? desktopMenu.style.display = 'block' : desktopMenu.style.display = 'none'
  const isAsideMenuClosed = shopingCartContainer.classList.contains("inactive");
  desktopMenu.classList.toggle("inactive");

  if (!isAsideMenuClosed) {
    shopingCartContainer.classList.add("inactive");
  }
}

function toggleMobileMenu() {
  const isAsideMenuClosed = shopingCartContainer.classList.contains("inactive");
  mobileMenu.classList.toggle("inactive");

  if (!isAsideMenuClosed) {
    shopingCartContainer.classList.add("inactive");
  }
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isMenuDesktopClosed = desktopMenu.classList.contains("inactive");
  shopingCartContainer.classList.toggle("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  if (!isMenuDesktopClosed) {
    desktopMenu.classList.add("inactive");
  }
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Auto",
  price: 2320,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(array) {
  for (product of array) {
    const productCard = document.createElement("div");
    const productCardImage = document.createElement("img");
    productCardImage.setAttribute("src", product.image);
    const productInfo = document.createElement("div");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
    const figure = document.createElement("figure");
    const figureImage = document.createElement("img");
    figureImage.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productCard.classList.add("product-card");
    productInfo.classList.add("product-info");

    //appends
    figure.appendChild(figureImage);
    //   productInfoDiv.appendChild(productPrice);
    //   productInfoDiv.appendChild(productName);
    productInfoDiv.append(productPrice, productName);
    //   productInfo.appendChild(productInfoDiv);
    //   productInfo.appendChild(figure);
    productInfo.append(productInfoDiv, figure);
    //   productCard.appendChild(productCardImage);
    //   productCard.appendChild(productInfo);

    productCard.append(productCardImage, productInfo);
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList)
