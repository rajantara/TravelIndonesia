var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    res.redirect('/')
  })
}); 


module.exports = router;
