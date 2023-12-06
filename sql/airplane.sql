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

 Date: 06/12/2023 01:51:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for airplane
-- ----------------------------
DROP TABLE IF EXISTS `airplane`;
CREATE TABLE `airplane`  (
  `airplane_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `airplane_type_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'e.g TX231',
  `fuel_volume` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `fuel_per_kilo` int(20) NULL DEFAULT NULL,
  `airplane_pic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`airplane_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of airplane
-- ----------------------------
INSERT INTO `airplane` VALUES (1, 'new_plane', '100000', 10, NULL);
INSERT INTO `airplane` VALUES (5, 'sec_plane', '111111', 10, NULL);

SET FOREIGN_KEY_CHECKS = 1;
