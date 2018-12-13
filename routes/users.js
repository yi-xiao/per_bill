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
	let { name,nickName='',sex=0,age=0,avatar='' } = req.body;
    // let sql = `insert into user(name, nickName, age, sex) values('${name}',"${nickName}",${sex},${age})`;
    			 
    // console.log(sql)
    // let result = await db.query(sql);
    let options = []
    let result = await userModel.create({
        name,
        nickName: nickName ? nickName : null,
        sex,
        age,
        avatar: avatar ? avatar : null
    })
    res.send(result);
});



/* update user */
router.post('/updateUser', async (req, res, next) => {
    let { name,nickName,sex,age,avatar, user_id } = req.body;

    let options = {}
    if(name !== null && !name){
        res.send('姓名不能为空');
        res.end();
    }else{
        options.name = name;
        if(nickName !== null) options.nickName = nickName;
        if(sex !== null) options.sex = sex;
        if(age !== null) options.age = age;
        if(avatar !== null) options.avatar = avatar;

        let result = await userModel.update(options,{
            where: {
                id: user_id
            }
        })
        res.send(result); 
    }
    
});

module.exports = router;
