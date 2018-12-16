/* *
* @desc 基础类型相关路由
*/
const express = require('express');
const router = express.Router();

const CategoryService = require('../services/categoryService');

router.get('/', async (req,res) => {
    //基础类型列表
    res.send(await CategoryService.getCategoryList());
});

router.post('/updateCategory', async (req,res) => {
    //创建或更新类型
    res.send(await CategoryService.updateCategory(req.body));
});

module.exports = router;