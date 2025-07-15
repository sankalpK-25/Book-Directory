const express = require("express");

const app = express();

const PORT = 3000;
const path = require("path");

const bookRoute = require("./routes/book");
const userRoute = require("./routes/user");
const staticRoute = require("./routes/staticRoute")

const cookieParser = require("cookie-parser");

const {restrictToLoggedinUserOnly } = require("./middlewares/auth")

const {connectToMongo} = require("./connecion")

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser())

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use("/",restrictToLoggedinUserOnly, bookRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);


connectToMongo("mongodb://127.0.0.1:27017/Book-Directory")
.then(() => console.log("Mongo connected"))
.catch((err) => console.log(err));


app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))