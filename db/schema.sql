CREATE TABLE `redjuan`.`products` (
  `id` INT NOT NULL,
  `name` VARCHAR(55) NULL,
  `price` DECIMAL(6) NULL,
  `description` VARCHAR(400) NULL,
  `category` VARCHAR(45) NULL,
  `url` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));

CREATE TABLE `redjuan`.`reviews` (
  `id` INT NOT NULL,
  `product_id` INT NULL,
  `recommended` TINYINT NULL,
  `purchaseDate` INT NULL,
  `starsGiven` INT NULL,
  `title` VARCHAR(50) NULL,
  `detailed` VARCHAR(255) NULL,
  `nickname` VARCHAR(25) NULL,
  `email` VARCHAR(30) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));
