CREATE TABLE `redjuan`.`products` (
  `id` INT NOT NULL,
  `name` VARCHAR(55) NULL,
  `price` DECIMAL(6) NULL,
  `description` VARCHAR(400) NULL,
  `category` VARCHAR(45) NULL,
  `url` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));
