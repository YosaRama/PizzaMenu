// Pizza Data

var pizza = {
  pizza_a: {
    name: "Pizza A",
    price: 8,
    topping: ["Avocado", "Broccoli", "Onions", "Zucchini", "Tuna", "Ham"],
  },
  pizza_b: {
    name: "Pizza B",
    price: 10,
    topping: [
      "Broccoli",
      "Onions",
      "Zucchini",
      "Lobster",
      "Oyster",
      "Salmon",
      "Bacon",
      "Ham",
    ],
  },
  pizza_c: {
    name: "Pizza C",
    price: 12,
    topping: [
      "Broccoli",
      "Onions",
      "Zucchini",
      "Tuna",
      "Bacon",
      "Duck",
      "Ham",
      "Sausage",
    ],
  },
};

var toppings = [
  "Avocado",
  "Broccoli",
  "Onions",
  "Zucchini",
  "Lobster",
  "Oyster",
  "Salmon",
  "Tuna",
  "Bacon",
  "Duck",
  "Ham",
  "Sausage",
];

// Topping Data

var toppingData = {
  Avocado: 1,
  Broccoli: 1,
  Onions: 1,
  Zucchini: 1,
  Lobster: 2,
  Oyster: 2,
  Salmon: 2,
  Tuna: 2,
  Bacon: 3,
  Duck: 3,
  Ham: 3,
  Sausage: 3,
};

// Start Variable
var priceTag = 0;
var toppingPrice = 0;
var sizePrice = 0;
document.getElementById("priceTag").innerHTML = "$" + priceTag;

// disable and uncheck checkbox before pizza chosen
disabledAllCheckbox();

function disabledAllCheckbox() {
  toppingPrice = 0;
  toppings.forEach(function (topping) {
    document.getElementById(topping).disabled = true;
    document.getElementById(topping).checked = false;
  });
}

// HTML Editor

// Pizza A
document.getElementById("pizzaA").innerHTML = pizza.pizza_a.name;
document.getElementById("pizzaAPrice").innerHTML = "$" + pizza.pizza_a.price;

// Pizza B
document.getElementById("pizzaB").innerHTML = pizza.pizza_b.name;
document.getElementById("pizzaBPrice").innerHTML = "$" + pizza.pizza_b.price;

// Pizza C
document.getElementById("pizzaC").innerHTML = pizza.pizza_c.name;
document.getElementById("pizzaCPrice").innerHTML = "$" + pizza.pizza_c.price;

// Pizza chosen and enable toppinglist

function pizzaChosen(pizzaName) {
  disabledAllCheckbox();
  switch (pizzaName) {
    case "Pizza_A":
      pizzaPrice = pizza.pizza_a.price;
      pizza.pizza_a.topping.forEach(function (item) {
        document.getElementById(item).disabled = false;
      });
      break;
    case "Pizza_B":
      pizzaPrice = pizza.pizza_b.price;
      pizza.pizza_b.topping.forEach(function (item) {
        document.getElementById(item).disabled = false;
      });
      break;
    case "Pizza_C":
      pizzaPrice = pizza.pizza_c.price;
      pizza.pizza_c.topping.forEach(function (item) {
        document.getElementById(item).disabled = false;
      });
      break;
    default:
      break;
  }
  totalPrice();
}

// Size Chosen and get price of size

function sizeChosen(size) {
  switch (size) {
    case "small":
      sizePrice = -1;
      break;
    case "medium":
      sizePrice = 0;
      break;
    case "large":
      sizePrice = 2;
      break;
    default:
      break;
  }
  totalPrice();
}

// Get topping price

function toppingChosen(toppingId) {
  if (document.getElementById(toppingId).checked === true) {
    toppingPrice = toppingPrice + toppingData[toppingId];
  } else {
    toppingPrice = toppingPrice - toppingData[toppingId];
  }
  totalPrice();
}

// Print total of Price

function totalPrice() {
  priceTag = pizzaPrice + toppingPrice + sizePrice;
  document.getElementById("priceTag").innerHTML = "$" + priceTag;
}
