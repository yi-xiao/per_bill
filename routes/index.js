/* *
* @desc 入口路由
*/
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Hello Guys ~'
  })
});

router.use('/user', require('./users'));
router.use('/bill', require('./bill'));
router.use('/record', require('./record'));
router.use('/base', require('./base'));

module.exports = router;
