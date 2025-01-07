-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 192.168.9.27    Database: netsbizdb
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adm_bcp_notification`
--

DROP TABLE IF EXISTS `adm_bcp_notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_bcp_notification` (
  `id` binary(16) NOT NULL,
  `content` varchar(500) DEFAULT NULL,
  `broadcast_on` tinyint(1) DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_timestamp` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `adm_conf_banner`
--

DROP TABLE IF EXISTS `adm_conf_banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_conf_banner` (
  `id` binary(16) NOT NULL,
  `subject_en` varchar(70) DEFAULT NULL,
  `message_en` varchar(200) DEFAULT NULL,
  `subject_zh` varchar(70) DEFAULT NULL,
  `message_zh` varchar(200) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  `image_ref` varchar(100) DEFAULT NULL,
  `cfc_flag` tinyint DEFAULT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `force_push_on` timestamp NULL DEFAULT NULL,
  `force_deactivated_on` timestamp NULL DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `approved_by` varchar(50) DEFAULT NULL,
  `approved_date` timestamp NULL DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `adm_conf_error_msg`
--

DROP TABLE IF EXISTS `adm_conf_error_msg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_conf_error_msg` (
  `id` binary(16) NOT NULL,
  `message` varchar(200) DEFAULT NULL,
  `code` varchar(8) DEFAULT NULL,
  `assigned_role` varchar(100) DEFAULT NULL,
  `remarks` varchar(200) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `adm_conf_help_section`
--

DROP TABLE IF EXISTS `adm_conf_help_section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_conf_help_section` (
  `id` binary(16) NOT NULL,
  `type` varchar(10) DEFAULT NULL,
  `header_en` varchar(200) DEFAULT NULL,
  `content_en` varchar(2000) DEFAULT NULL,
  `header_zh` varchar(200) DEFAULT NULL,
  `header_content_zh` varchar(2000) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `approved_by` varchar(50) DEFAULT NULL,
  `approved_data` timestamp NULL DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `adm_conf_leads_gen`
--

DROP TABLE IF EXISTS `adm_conf_leads_gen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_conf_leads_gen` (
  `id` binary(16) NOT NULL,
  `header_en` varchar(500) DEFAULT NULL,
  `header_zh` varchar(500) DEFAULT NULL,
  `header_ans_en` varchar(2000) DEFAULT NULL,
  `header_ans_zh` varchar(1000) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `approved_by` varchar(50) DEFAULT NULL,
  `approved_date` timestamp NULL DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `adm_conf_qtn`
--

DROP TABLE IF EXISTS `adm_conf_qtn`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_conf_qtn` (
  `id` binary(16) NOT NULL,
  `adm_conf_help_section_id` binary(16) NOT NULL,
  `qtn_en` varchar(500) DEFAULT NULL,
  `qtn_zh` varchar(500) DEFAULT NULL,
  `qtn_ans_en` varchar(2000) DEFAULT NULL,
  `qtn_ans_zh` varchar(2000) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `approved_by` varchar(50) DEFAULT NULL,
  `approved_date` timestamp NULL DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `adm_conf_qtn_FK` (`adm_conf_help_section_id`),
  CONSTRAINT `adm_conf_qtn_FK` FOREIGN KEY (`adm_conf_help_section_id`) REFERENCES `adm_conf_help_section` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `adm_conf_sys_param`
--

DROP TABLE IF EXISTS `adm_conf_sys_param`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_conf_sys_param` (
  `id` binary(16) NOT NULL,
  `inactivity_timeout` decimal(10,0) DEFAULT NULL,
  `inactivity_timeout_type` char(1) DEFAULT NULL,
  `sms_otp_interval` decimal(10,0) DEFAULT NULL,
  `sms_bcp_enabled` tinyint(1) DEFAULT NULL,
  `retry_count_allowed` decimal(10,0) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `approved_by` varchar(50) DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  `approved_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `adm_conf_wallet`
--

DROP TABLE IF EXISTS `adm_conf_wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_conf_wallet` (
  `id` binary(16) NOT NULL,
  `issuer_name` varchar(30) DEFAULT NULL,
  `issuer_description` varchar(100) DEFAULT NULL,
  `payment_type_id` varchar(6) DEFAULT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `image_ref` varchar(200) DEFAULT NULL,
  `effective_date` timestamp NULL DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `approved_by` varchar(50) DEFAULT NULL,
  `approved_date` timestamp NULL DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `adm_merchant_detail`
--

DROP TABLE IF EXISTS `adm_merchant_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_merchant_detail` (
  `id` binary(16) NOT NULL,
  `merchant_name` varchar(100) DEFAULT NULL,
  `rid` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `rid_alias` varchar(50) DEFAULT NULL,
  `created_datetime` timestamp NOT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  `outlet_contact_number` varchar(10) DEFAULT NULL,
  `outlet_offc_number` varchar(10) DEFAULT NULL,
  `cfc_flag` tinyint(1) DEFAULT NULL,
  `customer_id` varchar(36) DEFAULT NULL,
  `primary_contact_number` varchar(10) DEFAULT NULL,
  UNIQUE KEY `adm_merchant_detail_id_IDX` (`id`) USING BTREE,
  UNIQUE KEY `adm_merchant_detail_UN` (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `adm_role`
--

DROP TABLE IF EXISTS `adm_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_role` (
  `id` binary(16) NOT NULL,
  `role_name` varchar(20) NOT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `adm_user`
--

DROP TABLE IF EXISTS `adm_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_user` (
  `id` binary(16) NOT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  `adm_role_id` binary(16) DEFAULT NULL,
  `access_level` varchar(20) DEFAULT NULL,
  `effective_date` timestamp NULL DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `approved_by` varchar(50) DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `adm_user_FK` (`adm_role_id`),
  CONSTRAINT `adm_user_FK` FOREIGN KEY (`adm_role_id`) REFERENCES `adm_role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `adm_user_session`
--

DROP TABLE IF EXISTS `adm_user_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_user_session` (
  `id` binary(16) NOT NULL,
  `adm_user_id` binary(16) NOT NULL,
  `token` varchar(128) DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `adm_session_FK` (`adm_user_id`),
  CONSTRAINT `adm_session_FK` FOREIGN KEY (`adm_user_id`) REFERENCES `mob_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `app_version`
--

DROP TABLE IF EXISTS `app_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app_version` (
  `id` binary(16) NOT NULL,
  `type` char(1) DEFAULT NULL,
  `version_number` varchar(10) DEFAULT NULL,
  `rolled_date` timestamp NULL DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `business_config`
--

DROP TABLE IF EXISTS `business_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business_config` (
  `config_key` varchar(20) NOT NULL,
  `config_value` varchar(500) NOT NULL,
  `id` binary(16) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `business_config_UN` (`config_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mob_banner_statistic`
--

DROP TABLE IF EXISTS `mob_banner_statistic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mob_banner_statistic` (
  `id` binary(16) NOT NULL,
  `admin_conf_banner_id` binary(16) NOT NULL,
  `mob_user_id` binary(16) DEFAULT NULL,
  `first_click_date` timestamp NULL DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mob_banner_statistic_FK` (`admin_conf_banner_id`),
  CONSTRAINT `mob_banner_statistic_FK` FOREIGN KEY (`admin_conf_banner_id`) REFERENCES `adm_conf_banner` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mob_notifications`
--

DROP TABLE IF EXISTS `mob_notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mob_notifications` (
  `id` binary(16) NOT NULL,
  `tid` varchar(8) DEFAULT NULL,
  `sent_to_mob_user_id` binary(16) DEFAULT NULL,
  `sent_time` timestamp NULL DEFAULT NULL,
  `received_time` timestamp NULL DEFAULT NULL,
  `opened_time` timestamp NULL DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  `notification_type` varchar(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mob_session`
--

DROP TABLE IF EXISTS `mob_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mob_session` (
  `id` binary(16) NOT NULL,
  `mob_user_id` binary(16) DEFAULT NULL,
  `token` varchar(128) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `mobile_platform` varchar(7) DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  KEY `mob_session_FK` (`mob_user_id`),
  CONSTRAINT `mob_session_FK` FOREIGN KEY (`mob_user_id`) REFERENCES `mob_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mob_sms_otp`
--

DROP TABLE IF EXISTS `mob_sms_otp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mob_sms_otp` (
  `id` binary(16) NOT NULL,
  `code` varchar(10) DEFAULT NULL,
  `tid` varchar(8) DEFAULT NULL,
  `mob_user_id` binary(16) DEFAULT NULL,
  `latest` tinyint(1) DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mob_sms_otp_FK` (`mob_user_id`),
  CONSTRAINT `mob_sms_otp_FK` FOREIGN KEY (`mob_user_id`) REFERENCES `mob_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mob_terminal`
--

DROP TABLE IF EXISTS `mob_terminal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mob_terminal` (
  `id` binary(16) NOT NULL,
  `rid` varchar(11) NOT NULL,
  `tid` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `alias` varchar(50) DEFAULT NULL,
  `created_datetime` timestamp NOT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mob_terminal_UN` (`rid`,`tid`),
  CONSTRAINT `mob_terminal_FK` FOREIGN KEY (`rid`) REFERENCES `adm_merchant_detail` (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mob_transaction`
--

DROP TABLE IF EXISTS `mob_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mob_transaction` (
  `id` binary(16) NOT NULL,
  `mob_terminal_rid` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `mob_terminal_tid` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `stan` varchar(20) DEFAULT NULL,
  `icon_ref` varchar(30) DEFAULT NULL,
  `amount` decimal(16,2) DEFAULT NULL,
  `currency_code` varchar(3) DEFAULT NULL,
  `payment_type_id` varchar(20) DEFAULT NULL,
  `retrieval_ref` varchar(30) DEFAULT NULL,
  `transaction_id` varchar(10) DEFAULT NULL,
  `transaction_date` varchar(8) DEFAULT NULL,
  `transaction_time` varchar(6) DEFAULT NULL,
  `status` varchar(2) DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mob_transaction_FK` (`mob_terminal_rid`,`mob_terminal_tid`),
  CONSTRAINT `mob_transaction_FK` FOREIGN KEY (`mob_terminal_rid`, `mob_terminal_tid`) REFERENCES `mob_terminal` (`rid`, `tid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mob_user`
--

DROP TABLE IF EXISTS `mob_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mob_user` (
  `id` binary(16) NOT NULL,
  `mobile_number` varchar(8) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `lock` tinyint(1) DEFAULT NULL,
  `login_retry` tinyint DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `approved_by` varchar(50) DEFAULT NULL,
  `approved_datetime` timestamp NULL DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mob_user_mobile_number_IDX` (`mobile_number`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mob_user_preference`
--

DROP TABLE IF EXISTS `mob_user_preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mob_user_preference` (
  `id` binary(16) NOT NULL,
  `mob_user_id` binary(16) NOT NULL,
  `language` varchar(5) DEFAULT NULL,
  `push_notification_enabled` tinyint(1) DEFAULT NULL,
  `tts_enabled` tinyint(1) DEFAULT NULL,
  `mobile_app_version` varchar(20) DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mob_user_preference_FK` (`mob_user_id`),
  CONSTRAINT `mob_user_preference_FK` FOREIGN KEY (`mob_user_id`) REFERENCES `mob_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mob_user_role`
--

DROP TABLE IF EXISTS `mob_user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mob_user_role` (
  `id` binary(16) NOT NULL,
  `role` varchar(20) NOT NULL,
  `mob_user_id` binary(16) NOT NULL,
  `tid` varchar(8) DEFAULT NULL,
  `created_datetime` timestamp NULL DEFAULT NULL,
  `modified_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mob_user_role_UN` (`mob_user_id`),
  KEY `mob_user_role_mob_user_id_IDX` (`mob_user_id`,`tid`) USING BTREE,
  CONSTRAINT `mob_user_role_FK_1` FOREIGN KEY (`mob_user_id`) REFERENCES `mob_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_config`
--

DROP TABLE IF EXISTS `system_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `system_config` (
  `confg_key` varchar(20) NOT NULL,
  `config_value` varchar(100) NOT NULL,
  `id` binary(16) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `system_config_UN` (`confg_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'netsbizdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-07 10:04:26
