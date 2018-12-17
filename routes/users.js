/* *
* @desc 用户信息相关路由
*/
const express = require('express');
const router = express.Router();
const userService = require('../orm/services/userServices');

const upload = require('../middleware/uploadWare');

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

/* update user */
router.post('/uploadAvatar', upload.any() ,async (req, res, next) => {
    var file = req.files;

    // console.log('文件类型：%s', file.mimetype);
    // console.log('原始文件名：%s', file.originalname);
    // console.log('文件大小：%s', file.size);
    // console.log('文件保存路径：%s', file.path);
    console.log(file)

    res.send({ret_code: '0'});
});

module.exports = router;
