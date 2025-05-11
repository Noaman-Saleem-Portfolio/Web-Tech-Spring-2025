// "/" home
const home = (re, res) => {
  //   console.log("Welcome to Home Route!");
  //   res.send("<h1>Welcome to Home Route!</h1>");
  res.render("index");
};

// "/products" home
const products = (re, res) => {
  res.render("products");
};

export { home, products };
