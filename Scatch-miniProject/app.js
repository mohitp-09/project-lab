const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/db.config');
const ownersRouter = require('./routes/owners');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3000, () => {
  console.log("running on 3000...");
});
