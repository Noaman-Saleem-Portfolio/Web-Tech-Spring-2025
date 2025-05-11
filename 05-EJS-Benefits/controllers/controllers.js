// "/" home
const home = (re, res) => {
  //   console.log("Welcome to Home Route!");
  //   res.send("<h1>Welcome to Home Route!</h1>");
  res.render("index");
};

// "/products" home
const products = (re, res) => {
  let number = Math.floor(Math.random() * 10) + 1;
  let books = ["OOP", "DSA", "Database", "Analysis of Algorithms"];
  res.render("products", { number, books });
};

export { home, products };
