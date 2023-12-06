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

 Date: 06/12/2023 01:51:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for airport
-- ----------------------------
DROP TABLE IF EXISTS `airport`;
CREATE TABLE `airport`  (
  `airport_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `airport_ident` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `airport_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `airport_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `lat_deg` decimal(20, 10) NULL DEFAULT NULL,
  `lon_deg` decimal(20, 10) NULL DEFAULT NULL,
  `country_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `iso_country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`airport_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 131071 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of airport
-- ----------------------------
INSERT INTO `airport` VALUES (0, 'CYVR', 'Vancouver International Airport', 'large_airport', 49.1939010620, -123.1839981080, 'Canada', 'CA');
INSERT INTO `airport` VALUES (1, 'EDDB', 'Berlin Brandenburg Airport', 'large_airport', 52.3513890000, 13.4938890000, 'Germany', 'DE');
INSERT INTO `airport` VALUES (2, 'EFHK', 'Helsinki Vantaa Airport', 'large_airport', 60.3172000000, 24.9633010000, 'Finland', 'FI');
INSERT INTO `airport` VALUES (3, 'EGLL', 'London Heathrow Airport', 'large_airport', 51.4706000000, -0.4619410000, 'United Kingdom', 'GB');
INSERT INTO `airport` VALUES (4, 'FACT', 'Cape Town International Airport', 'large_airport', -33.9648017883, 18.6016998291, 'South Africa', 'ZA');
INSERT INTO `airport` VALUES (5, 'HECA', 'Cairo International Airport', 'large_airport', 30.1219005585, 31.4055995941, 'Egypt', 'EG');
INSERT INTO `airport` VALUES (6, 'KJFK', 'John F Kennedy International Airport', 'large_airport', 40.6398010000, -73.7789000000, 'United States', 'US');
INSERT INTO `airport` VALUES (7, 'KLAX', 'Los Angeles International Airport', 'large_airport', 33.9425010000, -118.4079970000, 'United States', 'US');
INSERT INTO `airport` VALUES (8, 'KMDW', 'Chicago Midway International Airport', 'large_airport', 41.7859990000, -87.7524030000, 'United States', 'US');
INSERT INTO `airport` VALUES (9, 'LFPG', 'Charles de Gaulle International Airport', 'large_airport', 49.0127980000, 2.5500000000, 'France', 'FR');
INSERT INTO `airport` VALUES (10, 'LIMC', 'Malpensa International Airport', 'large_airport', 45.6306000000, 8.7281100000, 'Italy', 'IT');
INSERT INTO `airport` VALUES (11, 'LTFM', 'Istanbul Airport', 'large_airport', 41.2612970000, 28.7419510000, 'Turkey', 'TR');
INSERT INTO `airport` VALUES (12, 'NZWN', 'Wellington International Airport', 'large_airport', -41.3272018433, 174.8049926760, 'New Zealand', 'NZ');
INSERT INTO `airport` VALUES (13, 'OMDB', 'Dubai International Airport', 'large_airport', 25.2527999878, 55.3643989563, 'United Arab Emirates', 'AE');
INSERT INTO `airport` VALUES (14, 'RJOO', 'Osaka International Airport', 'large_airport', 34.7854995728, 135.4380035400, 'Japan', 'JP');
INSERT INTO `airport` VALUES (15, 'RJTT', 'Tokyo Haneda International Airport', 'large_airport', 35.5522990000, 139.7799990000, 'Japan', 'JP');
INSERT INTO `airport` VALUES (16, 'RKSI', 'Incheon International Airport', 'large_airport', 37.4691009521, 126.4509963989, 'South Korea', 'KR');
INSERT INTO `airport` VALUES (17, 'SAEZ', 'Ministro Pistarini International Airport', 'large_airport', -34.8222000000, -58.5358000000, 'Argentina', 'AR');
INSERT INTO `airport` VALUES (18, 'SBGL', 'Rio Gale?o ? Tom Jobim International Air', 'large_airport', -22.8099990000, -43.2505570000, 'Brazil', 'BR');
INSERT INTO `airport` VALUES (19, 'UUDD', 'Domodedovo International Airport', 'large_airport', 55.4087982178, 37.9062995911, 'Russia', 'RU');
INSERT INTO `airport` VALUES (20, 'VABB', 'Chhatrapati Shivaji International Airpor', 'large_airport', 19.0886993408, 72.8678970337, 'India', 'IN');
INSERT INTO `airport` VALUES (21, 'VECC', 'Netaji Subhash Chandra Bose Internationa', 'large_airport', 22.6546993256, 88.4467010498, 'India', 'IN');
INSERT INTO `airport` VALUES (22, 'VTBS', 'Suvarnabhumi Airport', 'large_airport', 13.6810998917, 100.7470016479, 'Thailand', 'TH');
INSERT INTO `airport` VALUES (23, 'WSSS', 'Singapore Changi Airport', 'large_airport', 1.3501900000, 103.9940030000, 'Singapore', 'SG');
INSERT INTO `airport` VALUES (24, 'YSSY', 'Sydney Kingsford Smith International Air', 'large_airport', -33.9460983276, 151.1770019531, 'Australia', 'AU');
INSERT INTO `airport` VALUES (25, 'ZBAD', 'Beijing Daxing International Airport', 'large_airport', 39.5099450000, 116.4109200000, 'China', 'CN');
INSERT INTO `airport` VALUES (26, 'ZSPD', 'Shanghai Pudong International Airport', 'large_airport', 31.1434000000, 121.8050000000, 'China', 'CN');
INSERT INTO `airport` VALUES (27, 'ZUTF', 'Chengdu Tianfu International Airport', 'large_airport', 30.3125200000, 104.4412840000, 'China', 'CN');
INSERT INTO `airport` VALUES (28, 'ZWWW', 'Ürümqi Diwopu International Airport', 'large_airport', 43.9071006775, 87.4741973877, 'China', 'CN');

SET FOREIGN_KEY_CHECKS = 1;
