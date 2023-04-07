module.exports = function(app, obj, randomString, secretTokenNo) {

    app.get("/dashboard", function(req, res){
        res.render("dashboard");
    });

    app.get("/", function(req, res){
        res.render("login");
    });


}