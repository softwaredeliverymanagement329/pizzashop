const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

let nextId = 0;
let pizzaOrders = {};

// Third party middleware - Cookies
app.use(cookieParser());

app.post("/cookie/:name/:value", (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({ cookie: `${req.params.name}:${req.params.value}` });
});

app.get("/cookie", (req, res, next) => {
  res.send({ cookie: req.cookies });
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static("public"));

// Routing middleware
app.get("/pizza", (req, res) => {
  res.send(pizzaOrders);
});

app.get("/pizza/:order", (req, res) => {
  res.send(pizzaOrders[req.params.order]);
});

app.post("/pizza", (req, res) => res.send(orderPizza()));

app.delete("pizza/:order", (req, res) => res.send({ delete: req.params[0] }));

// Error middleware
app.get("/error", (req, res, next) => {
  throw new Error("Trouble in river city");
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Listening to a network port
const port = 3000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

function orderPizza() {
  let id = nextId++;
  pizzaOrders[id] = { toppings: ["fish", "cheese", "ham"], id: id };
  return pizzaOrders[id];
}
