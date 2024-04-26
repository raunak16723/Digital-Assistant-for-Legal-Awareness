const express = require("express");
const {
    handleLogIn,
    handleSignUp,
    handleResetPass
} = require("../controllers/login")

const {handleReviews} =require("../controllers/reviews")

const {getUser} =require("../service/auth")


const{handleChangePass,handleAccountDeletion} =require("../controllers/changePass")

const router = express.Router();

router.use(express.static(__dirname + "../views"));

router.get("/login", (req, res) => {
    console.log("req on login Page");
    res.render("loginPage");
})

router.post("/login", handleLogIn);

router.get("/signUp", (req, res) => {
    console.log("req on signUp Page");
    res.render("signUpPage");

})

router.post("/signUp", handleSignUp)

router.get("/forgetPass", (req, res) => {
    console.log("req on signUp Page");
    res.render("forgetPass");

})

router.post("/forgetPass", handleResetPass)


router.get("/userPage", (req, res) => {
    const user = getUser(req.cookies.jwtToken)
    let name = user.user;
    let email = user.email;
    // console.log(name,email)

    res.render("userPage",{
        name:name,
        email:email,
    });

})

router.post("/changePass",handleChangePass)

router.post("/deleteAccount",handleAccountDeletion)

router.post("/submitReview",handleReviews)







module.exports = router;