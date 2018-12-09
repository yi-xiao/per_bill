const express = require('express');
const router = express.Router();
const userModel = require('../orm/model/userModel');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    // let sql = 'select * from user';
    // let result = await db.query(sql);
    let result = await userModel.findAll();
    res.send(result);
});

/* create user */
router.post('/createUser', async (req, res, next) => {
	let { name,nickName='',sex=0,age=0 } = req.body;
    let sql = `insert into user(name, nickName, age, sex) values('${name}',"${nickName}",${sex},${age})`;
    			 
    console.log(sql)
    let result = await db.query(sql);
     res.send(result);
});

module.exports = router;
