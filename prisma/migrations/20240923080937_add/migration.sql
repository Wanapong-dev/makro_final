-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `member_id` VARCHAR(191) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `address` VARCHAR(191) NOT NULL,
    `sub_district` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `postal` VARCHAR(191) NOT NULL,
    `is_main` BOOLEAN NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` DECIMAL(10, 2) NOT NULL,
    `is_paid` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,
    `status` ENUM('CART', 'PENDING', 'PACKING', 'DELIVERING', 'DELIVERED', 'CANCELLED') NOT NULL DEFAULT 'CART',
    `payment_method` ENUM('CARD', 'PROMPTPAY') NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `order_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `stock` INTEGER NOT NULL,
    `detail` VARCHAR(191) NOT NULL,
    `length` INTEGER NOT NULL,
    `width` INTEGER NOT NULL,
    `height` INTEGER NOT NULL,
    `weight` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `category_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `address_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_product` ADD CONSTRAINT `order_product_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_product` ADD CONSTRAINT `order_product_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_image` ADD CONSTRAINT `product_image_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
