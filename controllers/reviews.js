const reviews = require("../models/reviews")


const {
    getUser
} = require("../service/auth")

async function handleReviews(req, res) {
    console.log("post on reviews")
    let user = getUser(req.cookies.jwtToken);

    let name = user.user;
    let email = user.email;
    let review = req.body.review;
    console.log(name,email,review)
    await reviews.create({
        name,
        email,
        review
    });
    return res.end();
}

module.exports ={
    handleReviews
}