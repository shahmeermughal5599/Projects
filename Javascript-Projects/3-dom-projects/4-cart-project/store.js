const addToCartAllButton = document.querySelectorAll(".shop-item-button");
const cartItemElement = document.querySelector(".cart-items");
const purchaseButtons = document.querySelector(".btn-purchase");

addToCartAllButton.forEach(function (singleAddToCartBtn) {
  singleAddToCartBtn.addEventListener("click", addtoCardBtnHandler);
});

function addtoCardBtnHandler(event) {
  event.preventDefault();
  const currentElement = event.target;
  const mainShopItemDiv = currentElement.parentElement.parentElement;
  const itemName = mainShopItemDiv.querySelector(".shop-item-title").innerText;
  const itemImage = mainShopItemDiv.querySelector(".shop-item-image").src;
  const itemPrice = mainShopItemDiv.querySelector(".shop-item-price").innerText;

  const cartItemNames = document.querySelectorAll(".cart-item-title");

  let isCartItemIsAlreadyExist = false;

  if (cartItemNames.length > 0) {
    cartItemNames.forEach(function (singleCartItemName) {
      if (singleCartItemName.innerText === itemName) {
        isCartItemIsAlreadyExist = true;
      }
    });
  }

  if (isCartItemIsAlreadyExist) {
    alert("This item is already exist in our cart");
    return;
  }

  cartItemElement.innerHTML += `<div class="cart-row">
          <div class="cart-item cart-column">
            <img
              class="cart-item-image"
              src=${itemImage}
              width="100"
              height="100"
            />
            <span class="cart-item-title">${itemName}</span>
          </div>
          <span class="cart-column"
            >$ <span class="cart-price-item-item">${itemPrice}</span></span
          >
          <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" />
            <button class="btn btn-danger btn-remove" type="button">
              REMOVE
            </button>
          </div>
        </div>`;

  // console.log(itemName, "itemName");
  // console.log(itemImage, "itemImage");
  // console.log(itemPrice, "itemPrice");
  //   console.log(mainShopItemDiv, "mainShopItemDiv");

  bindCartItemRemoveButton();
  updateCartTotal();
  bindAllCartQuantityInputField();
}

function bindCartItemRemoveButton() {
  const cartItemRemoveButton = document.querySelectorAll(".btn-remove");
  cartItemRemoveButton.forEach(function (singleRemoveBtn) {
    singleRemoveBtn.addEventListener("click", singleCartItemRemoveBtnHandler);
  });
}

function singleCartItemRemoveBtnHandler(event) {
  event.preventDefault();
  const currentElement = event.target;

  if (confirm("Are you sure ?")) {
    currentElement.parentElement.parentElement.remove();
    updateCartTotal();
  }
}

function updateCartTotal() {
  const selectAllCartPrices = document.querySelectorAll(
    ".cart-price-item-item"
  );

  let cartTotal = 0;

  selectAllCartPrices.forEach(function (singlePrice) {
    const cartRow = singlePrice.parentElement.parentElement;
    const cartQuantityField = cartRow.querySelector(".cart-quantity-input");

    cartTotal += parseFloat(singlePrice.innerText) * cartQuantityField.value;
  });

  const cartTotalElementSelect = document.querySelector(".cart-total-price");

  cartTotalElementSelect.innerText = `$ ${cartTotal.toFixed(2)}`;
}

function bindAllCartQuantityInputField() {
  const allCartInputField = document.querySelectorAll(".cart-quantity-input");

  allCartInputField.forEach(function (singleInputField) {
    singleInputField.removeEventListener("change", CartQuantityChangeHandler);
    singleInputField.addEventListener("change", CartQuantityChangeHandler);
  });
}

function CartQuantityChangeHandler(event) {
  const currentElement = event.target;
  if (currentElement.value <= 0) {
    currentElement.value = 1;
  }
  updateCartTotal();
}

purchaseButtons.addEventListener("click", purchaseBtnHandler);

function purchaseBtnHandler(event) {
  event.preventDefault();
  cartItemElement.innerHTML = "";
  updateCartTotal();
  alert("you have purchased successfully!");
}
