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

 Date: 06/12/2023 01:51:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task`  (
  `task_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `task_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `task_first_location` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT 'airport_id',
  `start` bigint(255) NULL DEFAULT NULL COMMENT 'airport_id',
  `end` bigint(255) NULL DEFAULT NULL COMMENT 'airport_id',
  `task_team_sign` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'self-define name',
  `task_amount` bigint(20) NULL DEFAULT NULL COMMENT 'example: 20',
  `task_mileage` bigint(20) NULL DEFAULT NULL COMMENT 'kilometer, EXAMPLE: 30',
  `task_content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'jsonList, example[{a:xxxxx, b:xxxxx},{a:xxxxx, b:xxxxx}]',
  `task_sort` bigint(10) NULL DEFAULT NULL COMMENT 'sort,exam:1 ,2,3,4,5',
  `version` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'v1, v2,v...',
  `next_task` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT 'task_id',
  `before_task` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT 'task_id',
  PRIMARY KEY (`task_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of task
-- ----------------------------
INSERT INTO `task` VALUES (1, 'zzz', 1, 1, 1, 'a', 9, 12, '122121', 1, NULL, NULL, NULL);
INSERT INTO `task` VALUES (2, 'aaa', 1, 1, 1, 'a', 8, 12, '122dwdwq', 2, NULL, NULL, NULL);
INSERT INTO `task` VALUES (3, 'bbb', 1, 1, 1, 'b', 4, 4, 'cdscdscd', 1, NULL, NULL, NULL);
INSERT INTO `task` VALUES (4, 'ccc', 1, 2, 2, 'b', 2, 5, 'cscsac', 2, NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
