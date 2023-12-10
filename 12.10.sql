-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        11.1.2-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 导出  表 flight_game.airplane 结构
CREATE TABLE IF NOT EXISTS `airplane` (
  `airplane_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `airplane_type_name` varchar(20) DEFAULT NULL COMMENT 'e.g TX231',
  `fuel_volume` varchar(255) DEFAULT NULL,
  `fuel_per_kilo` int(20) DEFAULT NULL,
  `airplane_pic` varchar(255) DEFAULT NULL,
  `airplane_price` bigint(20) DEFAULT NULL,
  `airplane_text` text DEFAULT NULL,
  PRIMARY KEY (`airplane_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- 正在导出表  flight_game.airplane 的数据：~4 rows (大约)
DELETE FROM `airplane`;
INSERT INTO `airplane` (`airplane_id`, `airplane_type_name`, `fuel_volume`, `fuel_per_kilo`, `airplane_pic`, `airplane_price`, `airplane_text`) VALUES
	(1, 'small', '10000', 2, 'Css/pics/shop_pics/shop_pic1.jpg', 2000, 'A small airplane, can be used for short distance travel.'),
	(2, 'medium', '30000', 3, 'Css/pics/shop_pics/shop_pic2.jpg', 5000, 'A bigger plane, widely used for passengers and cargo freight.'),
	(3, 'large', '70000', 4, 'Css/pics/shop_pics/shop_pic3.jpg', 10000, 'A large plane with longer travel distance.'),
	(4, 'legendary', '200000', 5, 'Css/pics/shop_pics/shop_pic4.jpg', 50000, 'A spaceship from the future, there is nowhere she can not go.');

-- 导出  表 flight_game.airport 结构
CREATE TABLE IF NOT EXISTS `airport` (
  `airport_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `airport_ident` varchar(255) DEFAULT NULL,
  `airport_name` varchar(255) DEFAULT NULL,
  `airport_type` varchar(255) DEFAULT NULL,
  `lat_deg` decimal(20,10) DEFAULT NULL,
  `lon_deg` decimal(20,10) DEFAULT NULL,
  `country_name` varchar(255) DEFAULT NULL,
  `iso_country` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`airport_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=131072 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- 正在导出表  flight_game.airport 的数据：~29 rows (大约)
DELETE FROM `airport`;
INSERT INTO `airport` (`airport_id`, `airport_ident`, `airport_name`, `airport_type`, `lat_deg`, `lon_deg`, `country_name`, `iso_country`) VALUES
	(1, 'EDDB', 'Berlin Brandenburg Airport', 'large_airport', 52.3513890000, 13.4938890000, 'Germany', 'DE'),
	(2, 'EFHK', 'Helsinki Vantaa Airport', 'large_airport', 60.3172000000, 24.9633010000, 'Finland', 'FI'),
	(3, 'EGLL', 'London Heathrow Airport', 'large_airport', 51.4706000000, -0.4619410000, 'United Kingdom', 'GB'),
	(4, 'FACT', 'Cape Town International Airport', 'large_airport', -33.9648017883, 18.6016998291, 'South Africa', 'ZA'),
	(5, 'HECA', 'Cairo International Airport', 'large_airport', 30.1219005585, 31.4055995941, 'Egypt', 'EG'),
	(6, 'KJFK', 'John F Kennedy International Airport', 'large_airport', 40.6398010000, -73.7789000000, 'United States', 'US'),
	(7, 'KLAX', 'Los Angeles International Airport', 'large_airport', 33.9425010000, -118.4079970000, 'United States', 'US'),
	(8, 'KMDW', 'Chicago Midway International Airport', 'large_airport', 41.7859990000, -87.7524030000, 'United States', 'US'),
	(9, 'LFPG', 'Charles de Gaulle International Airport', 'large_airport', 49.0127980000, 2.5500000000, 'France', 'FR'),
	(10, 'LIMC', 'Malpensa International Airport', 'large_airport', 45.6306000000, 8.7281100000, 'Italy', 'IT'),
	(11, 'LTFM', 'Istanbul Airport', 'large_airport', 41.2612970000, 28.7419510000, 'Turkey', 'TR'),
	(12, 'NZWN', 'Wellington International Airport', 'large_airport', -41.3272018433, 174.8049926760, 'New Zealand', 'NZ'),
	(13, 'OMDB', 'Dubai International Airport', 'large_airport', 25.2527999878, 55.3643989563, 'United Arab Emirates', 'AE'),
	(14, 'RJOO', 'Osaka International Airport', 'large_airport', 34.7854995728, 135.4380035400, 'Japan', 'JP'),
	(15, 'RJTT', 'Tokyo Haneda International Airport', 'large_airport', 35.5522990000, 139.7799990000, 'Japan', 'JP'),
	(16, 'RKSI', 'Incheon International Airport', 'large_airport', 37.4691009521, 126.4509963989, 'South Korea', 'KR'),
	(17, 'SAEZ', 'Ministro Pistarini International Airport', 'large_airport', -34.8222000000, -58.5358000000, 'Argentina', 'AR'),
	(18, 'SBGL', 'Rio Gale?o ? Tom Jobim International Air', 'large_airport', -22.8099990000, -43.2505570000, 'Brazil', 'BR'),
	(19, 'UUDD', 'Domodedovo International Airport', 'large_airport', 55.4087982178, 37.9062995911, 'Russia', 'RU'),
	(20, 'VABB', 'Chhatrapati Shivaji International Airpor', 'large_airport', 19.0886993408, 72.8678970337, 'India', 'IN'),
	(21, 'VECC', 'Netaji Subhash Chandra Bose Internationa', 'large_airport', 22.6546993256, 88.4467010498, 'India', 'IN'),
	(22, 'VTBS', 'Suvarnabhumi Airport', 'large_airport', 13.6810998917, 100.7470016479, 'Thailand', 'TH'),
	(23, 'WSSS', 'Singapore Changi Airport', 'large_airport', 1.3501900000, 103.9940030000, 'Singapore', 'SG'),
	(24, 'YSSY', 'Sydney Kingsford Smith International Air', 'large_airport', -33.9460983276, 151.1770019531, 'Australia', 'AU'),
	(25, 'ZBAD', 'Beijing Daxing International Airport', 'large_airport', 39.5099450000, 116.4109200000, 'China', 'CN'),
	(26, 'ZSPD', 'Shanghai Pudong International Airport', 'large_airport', 31.1434000000, 121.8050000000, 'China', 'CN'),
	(27, 'ZUTF', 'Chengdu Tianfu International Airport', 'large_airport', 30.3125200000, 104.4412840000, 'China', 'CN'),
	(28, 'ZWWW', 'Ürümqi Diwopu International Airport', 'large_airport', 43.9071006775, 87.4741973877, 'China', 'CN'),
	(131071, 'CYVR', 'Vancouver International Airport', 'large_airport', 49.1939010620, -123.1839981080, 'Canada', 'CA');

-- 导出  表 flight_game.player 结构
CREATE TABLE IF NOT EXISTS `player` (
  `player_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `player_name` varchar(20) DEFAULT NULL COMMENT 'name',
  `player_pic` varchar(255) DEFAULT NULL COMMENT 'head pic',
  `current_location` varchar(50) DEFAULT NULL COMMENT ' airport_id',
  `current_amount` bigint(20) DEFAULT 0 COMMENT 'money',
  `current_mileage` bigint(20) DEFAULT 0 COMMENT 'mileage',
  `current_version` varchar(20) DEFAULT NULL COMMENT 'v1, v2,v... ',
  PRIMARY KEY (`player_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci ROW_FORMAT=DYNAMIC;

-- 正在导出表  flight_game.player 的数据：~1 rows (大约)
DELETE FROM `player`;
INSERT INTO `player` (`player_id`, `player_name`, `player_pic`, `current_location`, `current_amount`, `current_mileage`, `current_version`) VALUES
	(1, 'player', '111', 'EFHK', 30000, 100, NULL);

-- 导出  表 flight_game.player_airplane 结构
CREATE TABLE IF NOT EXISTS `player_airplane` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `player_id` bigint(20) DEFAULT NULL COMMENT 'player_id',
  `airplane_id` bigint(20) DEFAULT NULL COMMENT 'airplane_id',
  `current_fuel_volume` bigint(20) DEFAULT NULL COMMENT 'current_fuel_volume',
  `is_current_airplane` int(255) unsigned DEFAULT 0 COMMENT '1yes  0no',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- 正在导出表  flight_game.player_airplane 的数据：~2 rows (大约)
DELETE FROM `player_airplane`;
INSERT INTO `player_airplane` (`id`, `player_id`, `airplane_id`, `current_fuel_volume`, `is_current_airplane`) VALUES
	(1, 1, 1, 1, 1),
	(2, 2, 1, 100000, 1);

-- 导出  表 flight_game.player_task 结构
CREATE TABLE IF NOT EXISTS `player_task` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `task_id` bigint(20) DEFAULT NULL,
  `player_id` bigint(20) DEFAULT NULL,
  `is_complete` int(5) DEFAULT 0 COMMENT '0-no  1-over',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- 正在导出表  flight_game.player_task 的数据：~1 rows (大约)
DELETE FROM `player_task`;
INSERT INTO `player_task` (`id`, `task_id`, `player_id`, `is_complete`) VALUES
	(1, 1, 1, 1);

-- 导出  表 flight_game.task 结构
CREATE TABLE IF NOT EXISTS `task` (
  `task_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `task_name` text DEFAULT NULL,
  `task_first_location` varchar(50) DEFAULT NULL COMMENT 'airport_id',
  `start` varchar(255) DEFAULT NULL COMMENT 'airport_id',
  `end` varchar(255) DEFAULT NULL COMMENT 'airport_id',
  `task_team_sign` varchar(20) NOT NULL COMMENT 'self-define name',
  `task_amount` bigint(20) DEFAULT NULL COMMENT 'example: 20',
  `task_mileage` bigint(20) DEFAULT NULL COMMENT 'kilometer, EXAMPLE: 30',
  `task_content` text DEFAULT NULL COMMENT 'jsonList, example[{a:xxxxx, b:xxxxx},{a:xxxxx, b:xxxxx}]',
  `task_pic` text DEFAULT NULL,
  `task_sort` bigint(10) DEFAULT NULL COMMENT 'sort,exam:1 ,2,3,4,5',
  `version` varchar(20) DEFAULT NULL COMMENT 'v1, v2,v...',
  `next_task` bigint(20) unsigned DEFAULT NULL COMMENT 'task_id',
  `before_task` bigint(20) unsigned DEFAULT NULL COMMENT 'task_id',
  PRIMARY KEY (`task_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- 正在导出表  flight_game.task 的数据：~20 rows (大约)
DELETE FROM `task`;
INSERT INTO `task` (`task_id`, `task_name`, `task_first_location`, `start`, `end`, `task_team_sign`, `task_amount`, `task_mileage`, `task_content`, `task_pic`, `task_sort`, `version`, `next_task`, `before_task`) VALUES
	(1, 'delivery_1', 'EFHK', 'EFHK', 'EDDB', '1', 10000, 0, '<p>From Helsinki Vantaa Airport to Berlin Brandenburg Airport! You are an experienced cargo pilot responsible for transporting vital goods. Today, your mission is to deliver an urgent shipment of medical supplies to a remote area. Your aircraft, a powerful cargo transport plane, is loaded with medicines, medical equipment, and provisions. </p>', 'Css/pics/task_pics/task_pic1_1.jpg', 1, '1', 2, 0),
	(2, 'delivery_2', 'EDDB', 'EDDB', 'LTFM', '1', 20000, 0, '<p>From Berlin Brandenburg Airport to Istanbul Airport! The morning air is filled with a refreshing mist as you take off from a bustling cargo airport. During the climb, you overlook the hustle and bustle of the city and the vastness of the land, experiencing the freedom and responsibility of flight.</p>', 'Css/pics/task_pics/task_pic1_2.jpg', 2, '1', 3, 1),
	(3, 'delivery_3', 'LTFM', 'LTFM', 'OMDB', '1', 30000, 0, '<p>From Istanbul Airport to Dubai International Airport! While en route to your destination, the weather suddenly changes. You receive a notification from the meteorological station about thunderstorms and strong winds in the vicinity. To ensure the safety of the cargo, you must skillfully navigate through this adverse weather. The plane encounters turbulence, lightning flashes across the sky, and you navigate through a challenging weather zone with nervous yet determined control.</p>', 'Css/pics/task_pics/task_pic1_3.jpg', 3, '1', 4, 2),
	(4, 'delivery_4', 'OMDB', 'OMDB', 'ZUTF', '1', 40000, 0, '<p>From Dubai International Airport to Chengdu Tianfu International Airport! With the mission accomplished, you prepare for the return journey. This time, the sky is clear, and the sunset reflects on the vast landscape. Your aircraft takes off into the sunset, carrying not only the hope of an empty cargo but also the memories of a mission fulfilled, flying toward the distant horizon.</p>', 'Css/pics/task_pics/task_pic1_4.jpg', 4, '1', 5, 3),
	(5, 'delivery(completed)', 'ZUTF', 'ZUFT', '!@#', '1', 50000, 0, '<p> With the mission accomplished, you prepare for the return journey. This time, the sky is clear, and the sunset reflects on the vast landscape. Your aircraft takes off into the sunset, carrying not only the hope of an empty cargo but also the memories of a mission fulfilled, flying toward the distant horizon.</p>', 'Css/pics/task_pics/task_pic1_5.jpg', 5, '1', 0, 4),
	(6, 'relief_1', 'LIMC', 'LIMC', 'HECA', '2', 10000, 0, '<p>From Malpensa International Airport to Cairo International Airport! You are a well-trained rescue pilot specializing in airborne rescue missions during crisis situations. One day, you receive an emergency call about an expedition team caught in an avalanche in a remote snow-covered mountain. You swiftly head to the airport, preparing for this high-risk rescue mission.</p>', 'Css/pics/task_pics/task_pic2_1.jpg', 1, '1', 7, 0),
	(7, 'relief_2', 'HECA', 'HECA', 'ZWWW', '2', 20000, 0, '<p>From Cairo International Airport to Ürümqi Diwopu International Airport! Your aircraft takes off and heads directly towards the snowy mountains. While navigating through rugged mountain ranges and the chilling high-altitude air, you must be cautious of cliffs, steep terrain, and fierce storms. Simultaneously, distress signals from the stranded individuals guide you to the accident site.</p>', 'Css/pics/task_pics/task_pic2_2.jpg', 2, '1', 8, 6),
	(8, 'relief_3', 'ZWWW', 'ZWWW', 'ZBAD', '2', 30000, 0, '<p>From Ürümqi Diwopu International Airport to Beijing Daxing International Airport! Upon reaching the snow-covered mountains, you land at a makeshift rescue base. Rescue personnel swiftly load the injured onto the helicopter, and your mission is to safely transport them to the nearest medical facility. During the flight, you must maintain the stability of the aircraft, ensuring the injured receive timely medical care.</p>', 'Css/pics/task_pics/task_pic2_3.jpg', 3, '1', 9, 7),
	(9, 'relief_4', 'ZBAD', 'ZBAD', 'ZSPD', '2', 40000, 0, '<p>From Beijing Daxing International Airport to Shanghai Pudong International Airport! The rescue team informs you that some members of the expedition are still missing deep within the snowy wilderness. Once again, you take to the skies, utilizing advanced thermal imaging technology and search equipment to locate the missing individuals. Flying over snow-capped peaks and glaciers, you discover traces leading you to the whereabouts of the missing team members.</p>', 'Css/pics/task_pics/task_pic2_4.jpg', 4, '1', 10, 8),
	(10, 'relief_5', 'ZSPD', 'ZSPD', 'RKSI', '2', 50000, 0, '<p>From Shanghai Pudong International Airport to Incheon International Airport! As the rescue mission nears its conclusion, a sudden snowstorm strikes. You must conduct the final evacuation under harsh weather conditions. With reduced visibility and swirling snow, you rely on your flying skills and navigation systems to safely bring all survivors and rescue personnel back to the base.</p>', 'Css/pics/task_pics/task_pic2_5.jpg', 5, '1', 11, 9),
	(11, 'relief(completed)', 'RKSI', 'RKSI', '!@#', '2', 60000, 0, '<p>In the end, you successfully complete this challenging airborne rescue mission. Your helicopter lands at the airport, where rescue personnel and the media await your return. You become the hero of this rescue operation, understanding that each rescue mission is a test of both flying skills and decision-making abilities.</p>', 'Css/pics/task_pics/task_pic2_6.jpg', 6, '1', 0, 10),
	(12, 'transhipment_1', 'CYVR', 'CYVR', 'KLAX', '3', 10000, 0, '<p>From Vancouver International Airport to Los Angeles International Airport! You are a special operations pilot assigned to a highly classified mission: the airborne transfer of a dangerous criminal. This criminal is an intelligent and cunning crime boss, and your task is to transport them from one maximum-security prison to another.</p>', 'Css/pics/task_pics/task_pic3_1.jpg', 1, '2', 13, 0),
	(13, 'transhipment_2', 'KLAX', 'KLAX', 'KMDW', '3', 20000, 0, '<p>From Los Angeles International Airport to Chicago Midway International Airport! After the criminal is transferred onto the aircraft, your plane takes off, heading towards the destination. However, you are not alone. The prison authorities have dispatched an armed-to-the-teeth security detail to protect the criminal. The aerial vigilance is intense, and you must stay vigilant, ensuring no one attempts to free the criminal.</p>', 'Css/pics/task_pics/task_pic3_2.jpg', 2, '2', 14, 12),
	(14, 'transhipment_3', 'KMDW', 'KMDW', 'KJFK', '3', 30000, 0, '<p>From Chicago Midway International Airport to John F Kennedy International Airport! After a fierce chase and battle, you successfully repel the syndicate\'s attack. However, you discover that this was only part of the plan. Someone leaked details of the mission, exposing the entire plan. Now, you must alter the original plan, find a secure airborne route, and ensure the criminal remains protected when delivered to the destination.</p>', 'Css/pics/task_pics/task_pic3_3.jpg', 3, '2', 15, 13),
	(15, 'transhipment(completed)', 'KJFK', 'KJFK', '!@#', '3', 40000, 0, '<p>In the end, you successfully navigate through all obstacles, safely delivering the criminal to the destination. Prison personnel take custody of the criminal, thanking you for smoothly completing the mission. Despite facing significant resistance, your flying skills and decisiveness enabled you to successfully carry out this high-risk airborne transfer mission.</p>', 'Css/pics/task_pics/task_pic3_4.jpg', 4, '2', 0, 14),
	(16, 'sky Romance_1', 'YSSY', 'YSSY', 'NZWN', '4', 20000, 0, '<p>From Sydney Kingsford Smith International Airport  to Wellington International Airport!  You are a pilot with a passion for flying, and one day at the airport\'s flying club, you encounter someone special who shares the same fascination with aviation. You both bond over your love for the sky, sharing stories of your flying experiences, and soon, a special connection begins to blossom beneath the blue sky.</p>', 'Css/pics/task_pics/task_pic4_1.jpg', 1, '1', 17, 0),
	(17, 'sky Romance_2', 'NZWN', 'NZWN', 'SAEZ', '4', 40000, 0, '<p>From Wellington International Airport to Ministro Pistarini International Airport! To bring yourselves even closer, you decide to invite your newfound partner to experience a romantic flight. Opting for a small, two-seater aircraft, you soar over rivers and mountains, feeling the exhilaration as the wind rushes beneath the wings. In the sky, you share a spectacular sunset, turning this flight into an unforgettable romantic escapade.</p>', 'Css/pics/task_pics/task_pic4_2.jpg', 2, '1', 18, 16),
	(18, 'sky Romance_3', 'SAEZ', 'SAEZ', 'SBGL', '4', 60000, 0, '<p>From Ministro Pistarini International Airport to Rio Gale?o ? Tom Jobim International Air! During your journey, you receive a mysterious mission that requires both of you to work together to complete a series of aerial challenges. This mission demands cooperation, requiring you to navigate through airborne obstacles and perform high-difficulty flight maneuvers. In the midst of these challenges, you not only strengthen your bond but also share the joy of success.</p>', 'Css/pics/task_pics/task_pic4_3.jpg', 3, '1', 19, 17),
	(19, 'sky Romance_4', 'SBGL', 'SBGL', 'FACT', '4', 80000, 0, '<p>From Rio Gale?o ? Tom Jobim International Air to Cape Town International Airport! Later in the evening, you decide to treat your partner to a stargazing rendezvous in the night sky. Flying away from the city\'s light pollution, you both ascend into the night sky, gazing at the stars. On the aircraft\'s deck, you admire the night sky while sharing dreams and aspirations. It\'s a beautiful and romantic stargazing date.</p>', 'Css/pics/task_pics/task_pic4_4.jpg', 4, '1', 20, 18),
	(20, 'sky Romance(completed)', 'FACT', 'FACT', '!@#', '4', 100000, 0, '<p>As the flight concludes, you both safely return to the airport. In the twilight, you disembark the plane together, savoring the joy of a day spent flying. This wonderful date deepens the connection between you two, and the farewell beneath the night sky is filled with anticipation for the next time you\'ll meet.</p>', 'Css/pics/task_pics/task_pic4_5.jpg', 5, '1', 0, 19);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
