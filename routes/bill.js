/* *
* @desc 统计信息相关路由
*/
const express = require('express');
const router = express.Router();

// type 0: 月度, 1： 年度

router.get('/', async (req,res) => {
    //群体账单
    res.send('');
});

router.get('/personal_bill', async (req,res) => {
    //个人账单
    res.send('');
});

module.exports = router;