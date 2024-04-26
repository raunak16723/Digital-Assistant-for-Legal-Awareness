const users = require("../models/users")
const {
    getUser
} = require("../service/auth")

async function handleChangePass(req, res) {
    // console.log("req on ")

    const currentPass = req.body.currentPass;
    const password = req.body.newPass;



    const user = getUser(req.cookies.jwtToken);

    // console.log(user)
    const name = user.user;
    const email = user.email;


    try {
        const u = await users.findOne({
            $and: [{
                name
            }, {
                email
            }]
        })

        if (u.password != currentPass) {
            return res.render("userPage", {
                err: "wrongPass",
                name: name,
                email: email,
            })
        }

        await users.findOneAndUpdate({
            $and: [{
                name
            }, {
                email
            }]
        }, {
            $set: {
                password
            }
        })

        return res.render("userPage", {
            succPass: "pass changed",
            name: name,
            email: email,
        })



    } catch (e) {
        console.log(e);
        res.render("userPage", {
            name: name,
            email: email,
        });
    }


}


async function handleAccountDeletion(req, res) {

    
    const user = getUser(req.cookies.jwtToken);
    const pass = req.body.pass;
    const cnfPas = req.body.cnfPas;

    

    const name = user.user;
    const email = user.email;

    try {
        const u = await users.findOne({
            $and: [{
                name
            }, {
                email
            }]
        })

        if (u.password != pass && u.password != cnfPas) {
            return res.render("userPage", {
                deleErr: "icorrect pass",
                name: name,
                email: email,

            })
        }

        await users.deleteOne({
            $and: [{
                name
            }, {
                email
            }]
        })

        return res.render("accountDeleted");

    } catch (e) {
        console.log(e);
    }



}





module.exports = {
    handleChangePass,
    handleAccountDeletion
}