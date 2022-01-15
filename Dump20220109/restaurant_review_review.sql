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
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `restaurantID` int NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `userRating` int NOT NULL,
  `datePosted` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `restaurant` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `_id_UNIQUE` (`_id`),
  KEY `restaurantId_idx` (`restaurantID`),
  KEY `idUser_idx` (`userID`) /*!80000 INVISIBLE */,
  CONSTRAINT `restaurantID` FOREIGN KEY (`restaurantID`) REFERENCES `restaurant` (`_id`) ON DELETE CASCADE,
  CONSTRAINT `userID` FOREIGN KEY (`userID`) REFERENCES `user` (`_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (11,40,5,'wdwdw ',3,'Thu Jan 06 2022 12:22:11 GMT+0800 (Singapore Standard Time)',NULL),(12,40,1,'The food is very good',5,'Sun Jan 09 2022 17:33:39 GMT+0800 (Singapore Standard Time)',NULL),(13,40,2,'the food is amazing ',5,'Thu Jan 06 2022 18:18:23 GMT+0800 (Singapore Standard Time)',NULL),(14,40,3,'the food is delicious ',4,'Thu Jan 06 2022 18:18:34 GMT+0800 (Singapore Standard Time)',NULL),(15,40,4,'The food is very good',5,'Sat Jan 08 2022 21:43:18 GMT+0800 (Singapore Standard Time)',NULL),(17,40,5,'the food is good ',5,'Sat Jan 08 2022 22:57:03 GMT+0800 (Singapore Standard Time)',NULL),(19,40,6,'the food is decent ',3,'Sun Jan 09 2022 17:18:51 GMT+0800 (Singapore Standard Time)',NULL),(20,1,6,'The food is very bad',1,'Sun Jan 09 2022 23:10:46 GMT+0800 (Singapore Standard Time)',NULL),(22,1,5,'the food is decent ',4,'Sun Jan 09 2022 23:10:06 GMT+0800 (Singapore Standard Time)',NULL);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
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
