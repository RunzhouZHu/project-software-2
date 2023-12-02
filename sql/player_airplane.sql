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

 Date: 02/12/2023 19:25:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for player_airplane
-- ----------------------------
DROP TABLE IF EXISTS `player_airplane`;
CREATE TABLE `player_airplane`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `player_id` bigint(20) NULL DEFAULT NULL COMMENT 'player_id',
  `airplane_id` bigint(20) NULL DEFAULT NULL COMMENT 'airplane_id',
  `current_fuel_volume` bigint(20) NULL DEFAULT NULL COMMENT 'current_fuel_volume',
  `is_current_airplane` int(255) UNSIGNED NULL DEFAULT 0 COMMENT '1yes  0no',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of player_airplane
-- ----------------------------
INSERT INTO `player_airplane` VALUES (1, 1, 1, 100000, 1);

SET FOREIGN_KEY_CHECKS = 1;
