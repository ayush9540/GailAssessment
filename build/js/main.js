"use strict";

fetch("./data/data.json").then(function (response) {
  return response.json();
}).then(function (json) {
  var products = json.products;

  for (var product in products) {
    var prod = products[product];
    console.log(prod);
    $("#product-list").append("\n      <div class=\"flex-wrap\">\n      <div class=\"product-wrap\">\n        <div><img src=\"".concat(prod.imageUrl, "\" alt=\"earphone\" /></div>\n        <div>\n          <h4>").concat(prod.name, "</h4>\n          <p>\n          ").concat(prod.desc, "\n          </p>\n        </div>\n      </div>\n      <div><h3>$").concat(prod.price, "</h3></div>\n      <div>\n        <button>+</button><input type=\"text\" value=\"1\" /> <button>-</button>\n      </div>\n      <div class=\"centerFlex\">\n        <h3>$0</h3>\n        <img src=\"./assets//icon/DELETE.png\" alt=\"\" />\n      </div>\n    </div>\n      "));
  }
}).catch(function (err) {
  return console.log(err);
});