function loadPage(page) {
  var head = document.querySelector(".pageHead");
  head.innerHTML = `<h1>${page}</h1>`;
  if (page === "Home") {
    renderHome(page);
  } else if (page === "Products") {
    // renderProduct();
  } else if (page === "Cart") {
    // renderCart();
  } else if (page === "Orders") {
    // renderOrders();
  } else if (page === "Account") {
    renderAccount();
  }
}
