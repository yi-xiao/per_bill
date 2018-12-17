/* *
* @desc 收支明细相关路由
*/
const express = require('express');
const router = express.Router();
const paydetailService = require('../orm/services/detailServices');

router.get('/', async (req,res) => {
    //todo 所有明细
    res.send(await paydetailService.getPaydetailList());
});

router.get('/person_detail', async (req,res) => {
    //个人明细
    res.send('');
});

router.post('/createDetil', async (req,res) => {
    //录入个人明细
    res.send(await paydetailService.createdPersonHistory(req.body));
});

router.post('/updateDetail', async (req,res) => {
    //更新明细记录
    res.send('');
});

module.exports = router;