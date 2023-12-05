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

 Date: 06/12/2023 01:51:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for player_task
-- ----------------------------
DROP TABLE IF EXISTS `player_task`;
CREATE TABLE `player_task`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `task_id` bigint(20) NULL DEFAULT NULL,
  `player_id` bigint(20) NULL DEFAULT NULL,
  `is_complete` int(5) NULL DEFAULT 0 COMMENT '0-no  1-over',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of player_task
-- ----------------------------
INSERT INTO `player_task` VALUES (1, 1, 1, 1);
INSERT INTO `player_task` VALUES (2, 2, 1, 0);
INSERT INTO `player_task` VALUES (3, 3, 1, 0);
INSERT INTO `player_task` VALUES (4, 4, 1, 0);

SET FOREIGN_KEY_CHECKS = 1;
