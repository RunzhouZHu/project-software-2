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

 Date: 06/12/2023 01:51:41
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
  `current_location` bigint(20) NULL DEFAULT NULL COMMENT ' airport_id',
  `current_amount` bigint(20) NULL DEFAULT 0 COMMENT 'money',
  `current_mileage` bigint(20) NULL DEFAULT 0 COMMENT 'mileage',
  `current_version` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL COMMENT 'v1, v2,v... ',
  PRIMARY KEY (`player_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of player
-- ----------------------------
INSERT INTO `player` VALUES (1, 'zzy', '111', 1, 99991, 100, NULL);

SET FOREIGN_KEY_CHECKS = 1;
