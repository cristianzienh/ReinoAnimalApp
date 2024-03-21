var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let result = [{nome: "baleia", habitat: "oceanos"},
                {nome: "vaca", habitat: "pastagens"}]
  res.render('index', { title: 'Mamíferos' , animals: result });
});

module.exports = router;
