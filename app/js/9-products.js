function renderProduct() {
  var body = document.querySelector(".pageBody");
  const wrapper = document.createElement("div");
  body.innerHTML = ``;
  wrapper.classList.add(`product`, `product_wrapper`);
  body.appendChild(wrapper);
  for (i in products) {
    for (x in products[i]) {
      const div = document.createElement("div");

      div.classList.add(
        `product`,
        `product_item`,
        `product_${products[i][x].productIdName}`
      );

      div.innerHTML = `<img class="product product_img" src="app/resources/Imgs/product-${products[i][x].productIdName}.jpg"><p>Name: ${products[i][x].name}</p><p>Price: £${products[i][x].price}</p>`;
      wrapper.appendChild(div);
    }
  }
  console.log(products.chairs);
  var newObj = JSON.stringify({
    chair3: {
      productIdName: "WoodChair",
      name: "Wooden chair",
      price: 15,
      selected: false,
    },
  });
  console.log(newObj);
  products.chairs = JSON.stringify(products.chairs) + newObj;
  console.log(products.chairs);
}
