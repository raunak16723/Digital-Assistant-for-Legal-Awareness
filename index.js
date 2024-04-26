const express = require("express");
const mongoose = require("mongoose");
const path = require("path");


const staticRouter = require("./routes/staticRoute");

const chatRouter = require("./api/chatApi");

const {
    restrictToLoggedinUserOnly
} = require("./middleware/auth");
const cookieParser = require("cookie-parser");

const {
    sendHomePage,
} = require("./controllers/home")



//Data base connection
mongoose.connect("mongodb://127.0.0.1:27017/Project")
    .then(() => console.log("Data Base connected"))
    .catch((err) => {
        console.log("Error while data base connecting: ", err);
    })

const app = express();
const PORT = 4000;

app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.json());



app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//Express Static
app.use(express.static("views"));
app.use("/css", express.static(__dirname + "/views/assets/css/"));
app.use("/js", express.static(__dirname + "/views/assets/js/"));
app.use("/img", express.static(__dirname + "/views/assets/img/"));





app.use("/", staticRouter);
app.use("/home", restrictToLoggedinUserOnly, sendHomePage);

app.use("/api", chatRouter);







app.listen(PORT, (err) => {
    if (err) console.log("ERROR: ", err);
    console.log("Server started at port number: ", PORT);
})