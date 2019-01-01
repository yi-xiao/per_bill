const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload');    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        // let ext = path.extname(file.originalname); //获取文件后缀 egg: .jpg/.txt .....
        cb(null, Date.now() + '_' + file.originalname);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;