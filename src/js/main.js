fetch("./data/data.json")
  .then(response => response.json())
  .then(json => {
    let products = json.products;
    for (let product in products) {
      let prod = products[product];
      console.log(prod);
      $("#product-list").append(`
      <div class="flex-wrap">
      <div class="product-wrap">
        <div><img src="${prod.imageUrl}" alt="earphone" /></div>
        <div>
          <h4>${prod.name}</h4>
          <p>
          ${prod.desc}
          </p>
        </div>
      </div>
      <div><h3>$${prod.price}</h3></div>
      <div>
        <button>+</button><input type="text" value="1" /> <button>-</button>
      </div>
      <div class="centerFlex">
        <h3>$0</h3>
        <img src="./assets//icon/DELETE.png" alt="" />
      </div>
    </div>
      `);
    }
  })
  .catch(err => console.log(err));
