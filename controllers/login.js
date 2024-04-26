const users = require("../models/users")

const {
    setUser
} = require("../service/auth")

async function handleLogIn(req, res) {

    // console.log("POST ON LOGIN ")

    const {
        name,
        password
    } = req.body;

    // try {
    //     const user = await users.findOne({
    //         name,
    //         password
    //     });
    //     console.log(name, password, user);
    //     if (!user) {
    //         return res.render("loginPage", {
    //             error: "err",
    //         });
    //     }
    //     const token = setUser(user)
    //     res.cookie("jwtToken", token);
    //     return res.render("index");

    // } catch (err) {
    //     console.log("Database Error while reading user");
    // }

    try {
        let user = await users.findOne({
            name,
            password
        });
        if (!user) {
            return res.render("loginPage", {
                error: "err",
            });
        }

        const token = setUser(user);
        res.cookie("jwtToken", token);
        return res.render("index");

    } catch (err) {
        console.log("Database Error while reading user", err);
        return res.status(500).send("Database error occurred");
    }


}

async function handleSignUp(req, res) {
    // console.log("post on signUp");

    const {
        name,
        email,
        password,
    } = req.body;

    const user = await users.create({
        name,
        email,
        password
    })

    return res.render("loginPage");
}

async function handleResetPass(req, res) {
    // console.log("Post on reset");

    const {
        name,
        email,
        password,
    } = req.body;

    console.log(name, email, password)

    const user = await users.findOneAndUpdate({
        $and: [{
            name
        }, {
            email
        }]
    }, {
        $set: {
            password
        }
    });
    // console.log(user);

    if (!user) {
        return res.render("forgetPass", {
            error: "error",
        })
    }
    return res.render("loginPage");
}

module.exports = {
    handleLogIn,
    handleSignUp,
    handleResetPass
}