/* *
* @desc 收支明细相关路由
*/
const express = require('express');
const router = express.Router();
const recordService = require('../orm/services/recordServices');

router.get('/', async (req,res) => {
    //todo 所有明细
    res.send(await recordService.getRecordList());
});

router.get('/person_record', async (req,res) => {
    //个人明细
    res.send('');
});

router.post('/createRecord', async (req,res) => {
    //录入个人明细
    res.send(await recordService.createdPersonHistory(req.body));
});

router.post('/updateRecord', async (req,res) => {
    //更新明细记录
    res.send(await recordService.updateRecord(req.body));
});

router.post('/removeRecord', async (req,res) => {
    //删除明细记录
    res.send(await recordService.removeRecord(req.body));
});

module.exports = router;