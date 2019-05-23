/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : bill

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-02-21 09:35:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) NOT NULL DEFAULT '' COMMENT '数据类型',
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '个人预先支出', null);
INSERT INTO `category` VALUES ('2', '个人平均', null);
INSERT INTO `category` VALUES ('3', '个人退回', null);
INSERT INTO `category` VALUES ('4', '个人总计', null);
INSERT INTO `category` VALUES ('5', '单项总计', null);
INSERT INTO `category` VALUES ('6', '整体总计', null);
INSERT INTO `category` VALUES ('7', '社保扣除', null);
INSERT INTO `category` VALUES ('8', '补贴', null);

-- ----------------------------
-- Table structure for `media`
-- ----------------------------
DROP TABLE IF EXISTS `media`;
CREATE TABLE `media` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '文件名称',
  `height` int(6) DEFAULT NULL,
  `width` int(6) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for `record`
-- ----------------------------
DROP TABLE IF EXISTS `record`;
CREATE TABLE `paydetail` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL COMMENT '关联的用户id',
  `type` int(2) NOT NULL DEFAULT '0' COMMENT '支出类型',
  `date` date DEFAULT NULL,
  `price` int(10) NOT NULL,
  `created_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of record
-- ----------------------------
INSERT INTO `record` VALUES ('1', '2', '1', '2018-12-31', '6000', '2019-01-05 22:46:09', '2019-01-05 22:46:06');
INSERT INTO `record` VALUES ('2', '1', '3', '2019-01-01', '8000', '2019-01-05 22:53:13', '2019-01-05 22:53:13');
INSERT INTO `record` VALUES ('3', '3', '1', '2019-01-02', '1230', '2019-01-05 22:53:52', '2019-01-05 22:53:52');
INSERT INTO `record` VALUES ('4', '2', '1', '2018-12-31', '3600', '2019-01-05 22:59:02', '2019-01-05 22:59:02');
INSERT INTO `record` VALUES ('5', '2', '1', '2018-12-31', '9900', '2019-01-05 23:00:58', '2019-01-05 23:00:58');
INSERT INTO `record` VALUES ('6', '3', '3', '2019-01-04', '5800', '2019-01-05 23:04:32', '2019-01-05 23:04:32');

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
  `birth` date NOT NULL COMMENT '出生年月',
  `sex` int(1) NOT NULL DEFAULT '0' COMMENT '0：未知 1：男 2：女',
  `avatar` int(10) DEFAULT '0' COMMENT '用户头像',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

ALTER TABLE `category` ADD COLUMN `category` int(4) NOT NULL DEFAULT 0 COMMENT '回复提醒人' AFTER `id`;
ALTER table `record` change `type` `category` int(2) NOT NULL DEFAULT '0' COMMENT '支出类型：1，收入，默认0：支出';
