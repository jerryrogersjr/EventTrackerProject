-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema expensedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `expensedb` ;

-- -----------------------------------------------------
-- Schema expensedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `expensedb` DEFAULT CHARACTER SET utf8 ;
USE `expensedb` ;

-- -----------------------------------------------------
-- Table `expense`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `expense` ;

CREATE TABLE IF NOT EXISTS `expense` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `expense_date` DATETIME NOT NULL,
  `paid_to` VARCHAR(45) NOT NULL,
  `expense_type` VARCHAR(45) NULL DEFAULT NULL,
  `payment_type` VARCHAR(45) NULL DEFAULT NULL,
  `workorder_num` INT(11) NULL DEFAULT NULL,
  `expense_description` VARCHAR(250) NOT NULL,
  `expense_total` DOUBLE NOT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
DROP USER IF EXISTS expense@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'expense'@'localhost' IDENTIFIED BY 'expense';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'expense'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `expense`
-- -----------------------------------------------------
START TRANSACTION;
USE `expensedb`;
INSERT INTO `expense` (`id`, `expense_date`, `paid_to`, `expense_type`, `payment_type`, `workorder_num`, `expense_description`, `expense_total`, `created_at`, `updated_at`) VALUES (1, '2019-11-29', 'Home Depot', 'Materials', 'CC', 123456789, 'Batteries for lights', 12.76, '2019-11-29', '2019-11-29');
INSERT INTO `expense` (`id`, `expense_date`, `paid_to`, `expense_type`, `payment_type`, `workorder_num`, `expense_description`, `expense_total`, `created_at`, `updated_at`) VALUES (2, '2019-11-29', 'Lowes', 'Expendables', 'Cash', 0, 'Stock Replacement: zip ties, tape, velcro', 37.98, '2019-11-29', '2019-11-29');
INSERT INTO `expense` (`id`, `expense_date`, `paid_to`, `expense_type`, `payment_type`, `workorder_num`, `expense_description`, `expense_total`, `created_at`, `updated_at`) VALUES (3, '2019-11-29', 'Starbucks', 'Customer Appreciation', 'CC', 0, 'Coffee for Jon at Wazzo ', 3.78, '2019-11-29', '2019-11-29');

COMMIT;

