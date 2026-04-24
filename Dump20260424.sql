-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nexvora_db
-- ------------------------------------------------------
-- Server version	8.0.45

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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `product_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK3d704slv66tw6x5hmbm6p2x3u` (`product_id`),
  KEY `FKg5uhi8vpsuy0lgloxk2h4w5o6` (`user_id`),
  CONSTRAINT `FK3d704slv66tw6x5hmbm6p2x3u` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `FKg5uhi8vpsuy0lgloxk2h4w5o6` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `category_name` (`category_name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (9,'Beauty & Personal Care'),(7,'Books'),(4,'Electronics'),(3,'Footwear'),(6,'Home & Kitchen'),(1,'Men Clothing'),(5,'Mobiles & Accessories'),(8,'Sports & Outdoors'),(10,'Toys & Baby Products'),(2,'Women Clothing');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `category_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Slim Fit Shirt','Cotton shirt for daily wear',799.99,50,1,'2026-03-11 15:20:42','2026-03-12 08:18:06','shirt1.webp'),(2,'Formal Trouser','Perfect for office wear',1199.50,40,1,'2026-03-11 15:20:42','2026-03-12 08:18:06','trouser1.webp'),(3,'Casual Hoodie','Comfortable hoodie for casual outings',999.00,30,1,'2026-03-11 15:20:42','2026-03-12 08:18:06','hoodie1.webp'),(4,'Polo T-Shirt','Classic polo t-shirt',699.99,45,1,'2026-03-11 15:20:42','2026-03-12 08:18:06','polo1.webp'),(5,'Denim Jacket','Stylish denim jacket',1599.50,25,1,'2026-03-11 15:20:42','2026-03-12 08:18:06','denimjacket1.webp'),(6,'Floral Dress','Stylish summer dress',1499.99,25,2,'2026-03-11 15:20:42','2026-03-12 08:18:06','floraldress1.webp'),(7,'Denim Jacket','Trendy denim jacket',1999.50,20,2,'2026-03-11 15:20:42','2026-03-12 08:18:06','denimjacket2.jpg'),(8,'Kurti Set','Elegant ethnic wear',1299.00,30,2,'2026-03-11 15:20:42','2026-03-12 08:18:06','kurti1.jpg'),(9,'Maxi Dress','Comfortable and flowy maxi dress',1599.99,25,2,'2026-03-11 15:20:42','2026-03-12 08:18:06','maxidress1.jpg'),(10,'Casual Top','Soft cotton casual top',799.50,40,2,'2026-03-11 15:20:42','2026-03-12 08:18:06','casualtop1.jpg'),(11,'Running Shoes','Lightweight running shoes',1999.00,25,3,'2026-03-11 15:20:42','2026-03-12 08:18:06','runningshoes1.jpg'),(12,'Leather Boots','Durable leather boots',2499.50,20,3,'2026-03-11 15:20:42','2026-03-12 08:18:06','leatherboots1.jpg'),(13,'Flip Flops','Casual summer flip flops',499.99,50,3,'2026-03-11 15:20:42','2026-03-12 08:18:06','flipflops1.jpg'),(14,'Sneakers','Stylish daily sneakers',1499.00,35,3,'2026-03-11 15:20:42','2026-03-12 08:18:06','sneak.jpg'),(15,'Formal Shoes','Elegant leather formal shoes',2999.99,20,3,'2026-03-11 15:20:42','2026-03-12 08:18:06','formalshoes1.jpg'),(16,'Smartphone X1','Latest Android smartphone',15999.00,15,4,'2026-03-11 15:20:42','2026-03-12 08:18:06','smartphoneX1.jpg'),(17,'Smart TV 55\"','4K Ultra HD Smart TV',39999.99,10,4,'2026-03-11 15:20:42','2026-03-12 08:18:06','smartTV55.jpg'),(18,'Bluetooth Speaker','Portable speaker with great sound',2999.50,35,4,'2026-03-11 15:20:42','2026-03-12 08:18:06','bluetoothspeaker1.jpg'),(19,'Laptop Pro 15\"','High performance laptop',59999.99,12,4,'2026-03-11 15:20:42','2026-03-12 08:18:06','laptoppro15.jpg'),(20,'Tablet Z5','Lightweight tablet with stylus',24999.00,20,4,'2026-03-11 15:20:42','2026-03-12 08:18:06','tabletz5.jpg'),(21,'Mobile Case','Protective case for smartphones',399.99,100,5,'2026-03-11 15:20:42','2026-03-12 08:18:06','mobilecase1.jpg'),(22,'Screen Protector','Tempered glass protector',199.50,150,5,'2026-03-11 15:20:42','2026-03-12 08:18:06','screenprotector1.jpg'),(23,'Wireless Earbuds','Bluetooth earbuds with mic',2499.00,50,5,'2026-03-11 15:20:42','2026-03-12 08:18:06','wirelessearbuds1.webp'),(24,'Portable Charger','Fast charging power bank',1499.50,80,5,'2026-03-11 15:20:42','2026-03-12 08:18:06','portablecharger1.jpg'),(25,'Phone Stand','Adjustable phone stand',499.99,70,5,'2026-03-11 15:20:42','2026-03-12 08:18:07','phonestand1.jpg'),(26,'Non-stick Cookware Set','5-piece cookware set',3999.99,20,6,'2026-03-11 15:20:42','2026-03-12 08:18:07','cookwareset1.jpg'),(27,'Vacuum Cleaner','Compact and powerful',8999.50,15,6,'2026-03-11 15:20:42','2026-03-12 08:18:07','vacuumcleaner1.jpg'),(28,'LED Ceiling Light','Energy-saving LED light',799.99,50,6,'2026-03-11 15:20:42','2026-03-12 08:18:07','ledceilinglight1.jpg'),(29,'Air Fryer','Healthy cooking air fryer',4999.99,20,6,'2026-03-11 15:20:42','2026-03-12 08:18:07','airfryer1.jpg'),(30,'Blender Set','Multi-purpose blender',2999.99,30,6,'2026-03-11 15:20:42','2026-03-12 08:18:07','blenderset1.jpg'),(31,'Java Programming','Complete guide for beginners',599.00,40,7,'2026-03-11 15:20:42','2026-03-12 08:18:07','javaprogramming1.webp'),(32,'Data Science Handbook','Learn data science step by step',799.50,30,7,'2026-03-11 15:20:42','2026-03-12 08:18:07','datasciencehandbook1.jpg'),(33,'AI & ML Basics','Introduction to AI & ML',999.00,20,7,'2026-03-11 15:20:42','2026-03-12 08:18:07','aimlbasic1.jpg'),(34,'Python Cookbook','Recipes for Python programming',899.50,25,7,'2026-03-11 15:20:42','2026-03-12 08:18:07','pbook1.jpg'),(35,'Web Development Guide','Learn HTML, CSS, JS',699.00,35,7,'2026-03-11 15:20:42','2026-03-12 08:18:07','webdevguide1.jpg'),(36,'Yoga Mat','Eco-friendly yoga mat',999.00,25,8,'2026-03-11 15:20:42','2026-03-12 08:18:07','yogamat1.jpg'),(37,'Cricket Bat','Premium willow bat',2499.00,15,8,'2026-03-11 15:20:42','2026-03-21 04:42:24','cricketbat1.webp'),(38,'Football','FIFA-approved size and weight',699.50,8,8,'2026-03-11 15:20:42','2026-03-21 04:42:24','football1.webp'),(39,'Tennis Racket','Lightweight tennis racket',1999.99,20,8,'2026-03-11 15:20:42','2026-03-12 08:18:07','tennisracket1.jpg'),(40,'Dumbbell Set','Adjustable dumbbells for home gym',3999.50,12,8,'2026-03-11 15:20:42','2026-03-12 08:18:07','dumbbellset1.jpg'),(41,'Face Wash','Gentle daily face wash',349.00,100,9,'2026-03-11 15:20:42','2026-03-12 08:18:07','facewash1.jpg'),(42,'Shampoo','Anti-dandruff shampoo',399.50,80,9,'2026-03-11 15:20:42','2026-03-12 08:18:07','shampoo1.jpg'),(43,'Perfume','Long-lasting fragrance',999.00,50,9,'2026-03-11 15:20:42','2026-03-12 08:18:07','perfume1.jpg'),(44,'Moisturizer','Daily skin moisturizer',499.50,60,9,'2026-03-11 15:20:42','2026-03-12 08:18:07','moisturizer1.jpg'),(45,'Lipstick','Long-lasting matte lipstick',699.00,40,9,'2026-03-11 15:20:42','2026-03-12 08:18:07','lipstick1.jpg'),(46,'Toy Car Set','Battery-operated toy cars',799.50,40,10,'2026-03-11 15:20:42','2026-03-12 08:18:07','toycarset1.jpg'),(47,'Building Blocks','Creative building blocks for kids',499.99,60,10,'2026-03-11 15:20:42','2026-03-12 08:18:07','buildingblocks1.jpg'),(48,'Baby Stroller','Lightweight and foldable',5999.00,15,10,'2026-03-11 15:20:42','2026-03-12 08:18:07','babystroller1.jpg'),(49,'Soft Teddy Bear','Plush teddy bear toy',299.50,50,10,'2026-03-11 15:20:42','2026-03-12 08:18:07','softteddybear1.jpg'),(50,'Puzzle Set','Educational puzzle set',399.00,45,10,'2026-03-11 15:20:42','2026-03-12 08:18:07','puzzleset1.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('ADMIN','CUSTOMER') NOT NULL DEFAULT 'CUSTOMER',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'harsha@example.com','12345','CUSTOMER','harsha');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-24 16:45:31
