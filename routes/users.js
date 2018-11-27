const express = require('express');
const router = express.Router();
const db = require('../model/db');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    let sql = 'select * from user';
    await db(sql, (result) => {
        res.send(result)
    });
});

module.exports = router;
