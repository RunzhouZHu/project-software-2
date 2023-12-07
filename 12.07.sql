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

-- 正在导出表  flight_game.airplane 的数据：~0 rows (大约)
DELETE FROM `airplane`;
INSERT INTO `airplane` (`airplane_id`, `airplane_type_name`, `fuel_volume`, `fuel_per_kilo`) VALUES
	(1, 'new_plane', '100000', '10');

-- 正在导出表  flight_game.airport 的数据：~29 rows (大约)
DELETE FROM `airport`;
INSERT INTO `airport` (`airport_id`, `airport_ident`, `airport_name`, `airport_type`, `lat_deg`, `lon_deg`, `country_name`, `iso_country`) VALUES
	(0, 'CYVR', 'Vancouver International Airport', 'large_airport', 49.1939010620, -123.1839981080, 'Canada', 'CA'),
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
	(28, 'ZWWW', 'Ürümqi Diwopu International Airport', 'large_airport', 43.9071006775, 87.4741973877, 'China', 'CN');

-- 正在导出表  flight_game.player 的数据：~0 rows (大约)
DELETE FROM `player`;
INSERT INTO `player` (`id`, `current_location`) VALUES
	(1, 'ZWWW');

-- 正在导出表  flight_game.player_airplane 的数据：~0 rows (大约)
DELETE FROM `player_airplane`;
INSERT INTO `player_airplane` (`id`, `player_id`, `airplane_id`, `current_fuel_volume`, `is_current_airplane`) VALUES
	(1, 1, 1, 100000, 1);

-- 正在导出表  flight_game.player_task 的数据：~0 rows (大约)
DELETE FROM `player_task`;

-- 正在导出表  flight_game.task 的数据：~7 rows (大约)
DELETE FROM `task`;
INSERT INTO `task` (`task_id`, `task_name`, `task_first_location`, `start`, `end`, `task_team_sign`, `task_amount`, `task_mileage`, `task_content`, `task_sort`, `version`, `next_task`, `before_task`) VALUES
	(1, 'my first airplane', 'EFHK', 'EFHK', 'EDDB', '1', 100, 10, '<p>aaaaaaaaaaaaaaaaaaaaaa</p>', 1, '1', 2, 0),
	(2, 'my first airplane2', 'EDDB', 'EDDN', 'LTFM', '1', 100, 10, '<p>bbbbbbbbbbbbbbbbbbbbbb</p>', 2, '1', 3, 2),
	(3, 'my first airplane3', 'LTFM', 'LTFM', 'OMDB', '1', 100, 10, '<p>ccccccccccccccccccccccccccc</p>', 3, '1', 4, 3),
	(4, 'my first airplane4', 'OMDB', 'OMDB', 'ZUTF', '1', 100, 10, '<p>ddddddddddddddddddddddd</p>', 4, '1', 0, 4),
	(5, 'next step', 'VTBS', 'YSSY', 'NZWN', '2', 100, 10, '<p>eeeeeeeeeeeeeeeeeeeeeeee</p>', 1, '1', 6, 0),
	(6, 'next step2', 'NZWN', 'ZSPD', 'ZBAD', '2', 100, 10, '<p>ffffffffffffffffffffffffffffffffffff</p>', 2, '1', 0, 6),
	(7, 'new', 'EGLL', 'KJFK', 'KMDW', '3', 1000, 10, '<p>gggggggggggggggggggggggg</p>', 1, '2', 8, 0);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
