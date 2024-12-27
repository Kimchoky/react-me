var express = require('express');
var router = express.Router();

const menuList = require('../lib/menu.json');

/* GET users listing. */
router.get('/menu', function(req, res, next) {
    
  res.json(menuList);
  
});



module.exports = router;