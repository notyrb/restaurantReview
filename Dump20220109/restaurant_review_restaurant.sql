-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: restaurant_review
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `restaurantName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `cuisine` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `regionID` int NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `openingHours` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `website` text COLLATE utf8mb4_unicode_ci,
  `picture` text COLLATE utf8mb4_unicode_ci,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating` float NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `_id_UNIQUE` (`_id`) /*!80000 INVISIBLE */,
  KEY `regionID_idx` (`regionID`),
  CONSTRAINT `regionID` FOREIGN KEY (`regionID`) REFERENCES `region` (`_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'Ramen Nagi','This is ramen nagi','Japanese',1,'Suntec City Tower 2, North Wing, #01-512/513, 038989','1','8am to 9am','ramennagi.com','www',NULL,NULL,4,2),(2,'So Pho','This is so pho','Vietnamese',2,'4 Tampines Central 5, #04 - 30, Singapore 529510','2','9am to 9pm','sopho.com','eeee',NULL,NULL,3,1),(3,'Din Tai Fung','This is din tai fung','Chinese',3,'50 Jurong Gateway Rd, #02 - 07, Singapore 608549','3','9am to 8pm','dintaifung.com','fff',NULL,NULL,5,3),(4,'Encik Tan','This is encik tan','Chinese',2,'51 Tampines Ave 4, #01-12 Our Tampines Hub, Singapore 528523','4','10am to 7pm','enciktan.com','ggg',NULL,NULL,4,1),(5,'Sushi Tei','This is sushi tei','Japanese',4,'930 Yishun Ave 2 #02-15, Northpoint City, 769098','5','8am to 8pm','sushitei.com','eeww',NULL,NULL,3,2),(6,'Genki Sushi','This is genki sushi','Japanese',1,'3 Temasek Blvd, #02-456/457, Singapore 038983','6','11am to 10pm','genkisushi.com','eede',NULL,NULL,4,1);
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-09 23:32:02
