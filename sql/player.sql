/*
 Navicat Premium Data Transfer

 Source Server         : mariaDB
 Source Server Type    : MariaDB
 Source Server Version : 110102
 Source Host           : localhost:3306
 Source Schema         : flight_game

 Target Server Type    : MariaDB
 Target Server Version : 110102
 File Encoding         : 65001

 Date: 02/12/2023 19:25:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for player
-- ----------------------------
DROP TABLE IF EXISTS `player`;
CREATE TABLE `player`  (
  `player_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `player_name` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'name',
  `player_pic` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'head pic',
  `current_location` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT ' airport_id',
  `current_amount` bigint(20) NULL DEFAULT 0 COMMENT 'money',
  `current_mileage` bigint(20) NULL DEFAULT 0 COMMENT 'mileage',
  `current_version` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'v1, v2,v... ',
  PRIMARY KEY (`player_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of player
-- ----------------------------
INSERT INTO `player` VALUES (1, 'zzy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7IYBSlRa7XVX6yr_NsvniHBbmg1ttTb6QQ&usqp=CAU', '', 10000, 0, NULL);

SET FOREIGN_KEY_CHECKS = 1;
