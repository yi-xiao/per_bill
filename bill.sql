SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `type` int(2) NOT NULL DEFAULT '0' COMMENT '数据类型',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of category
-- ----------------------------

-- ----------------------------
-- Table structure for `paydetail`
-- ----------------------------
DROP TABLE IF EXISTS `paydetail`;
CREATE TABLE `paydetail` (
  `id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL COMMENT '关联的用户id',
  `type` int(2) NOT NULL DEFAULT '0' COMMENT '支出类型',
  `price` int(10) NOT NULL,
  `created_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of paydetail
-- ----------------------------

-- ----------------------------
-- Table structure for `statistic`
-- ----------------------------
DROP TABLE IF EXISTS `statistic`;
CREATE TABLE `statistic` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `extra` int(10) NOT NULL,
  `date` varchar(10) NOT NULL COMMENT '时间段：如 2018-07',
  `created_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of statistic
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `nickName` varchar(50) DEFAULT 'null' COMMENT '备注，小名',
  `age` int(3) NOT NULL DEFAULT '0' COMMENT '年龄，默认0',
  `sex` int(1) NOT NULL DEFAULT '0' COMMENT '0：未知 1：男 2：女',
  `avatar` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
