const mysql = require('mysql');

const options = {
	host: 'localhost',
	port: '3306',
	user: 'root',
	database: '',
	password: ''
}

const pool = mysql.createPool({
	...options
})

const Pool = {};

Pool.query = (sql, fn) => {
	//sql 为接收的sql语句， fn 为回调，用以处理操作结果
	pool.getConnection(function(err, conn) {
		if(err)
		 	throw err
		conn.query(sql, function(err, result, fields) {
			//查询完毕，释放连接
			conn.release();
			if(err)
				throw err
			fn(result)
		})
	})
}

// 方法二： 使用 async await 返回一个promise对象
// Pool.query = async (sql) => {
// 	return new Promise((reslove,reject) => {
// 		pool.getConnection(function(err, conn) {
// 			if(err)
// 			 	reject(err)
// 			conn.query(sql, function(err, result, fields) {
// 				//查询完毕，释放连接
// 				conn.release();
// 				if(err)
// 					reject(err)
// 				// fn(result)
// 				 reslove(result)
// 			})
// 		})
// 	})
// }

module.exports = Pool;