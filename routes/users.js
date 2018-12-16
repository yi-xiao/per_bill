/* *
* @desc 用户信息相关路由
*/
const express = require('express');
const router = express.Router();
const userService = require('../services/userServices');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    res.send(await userService.getUserList());
});

/* create user */
router.post('/createUser', async (req, res, next) => {
    res.send(await userService.createUser(req.body));
});

/* update user */
router.post('/updateUser', async (req, res, next) => {
    let { name } = req.body;
    if(name !== null && !name){
        res.send('姓名不能为空');
        res.end();
    }else{
        res.send(await userService.updateUserInfo(req.body));
    }
});

module.exports = router;
