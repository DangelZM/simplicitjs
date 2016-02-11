var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send({
        title: "Home page"
    });
});

module.exports = router;