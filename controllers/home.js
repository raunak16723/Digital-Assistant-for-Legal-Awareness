async function sendHomePage(req, res) {
    res.render("index");
}

module.exports = {
    sendHomePage,
}