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
-- Table `general_expenses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `general_expenses` ;

CREATE TABLE IF NOT EXISTS `general_expenses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `expense_date` DATETIME NOT NULL,
  `paid_to` VARCHAR(45) NOT NULL,
  `expense_type` VARCHAR(45) NULL,
  `payment_type` VARCHAR(45) NULL,
  `workorder_num` INT NULL,
  `expense_description` VARCHAR(250) NOT NULL,
  `expense_total` DOUBLE NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS expenseUser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'expenseUser'@'localhost' IDENTIFIED BY 'expenseUser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'expenseUser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
