var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/usuario', function(req, res) {
  res.json([{
    id: 1,
    username: "samsepi0l"
  }, {
    id: 2,
    username: "D0loresH4ze"
  }]);
});

module.exports = router;