-- Drops the bamazon_db if it already exists --
DROP DATABASE IF EXISTS bamazon_db;
-- Create a database called bamazon_db --
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(20) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50),
  department_name VARCHAR(50),
  price INTEGER (100),
  stock_quantity INTEGER (100),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (1, "troll doll", "toys", 40, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (2, "Barbie", "toys", 35, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (3, "basketball", "sports equipment", 15, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (4, "bike helmet", "sports equipment", 16, 61);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (5, "oil paint", "art supplies", 24, 65);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (6, "charcoal", "art supplies", 3, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (7, "yoga mat", "yoga", 75, 68);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (8, "yoga towel", "yoga", 95, 89);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (9, "incense", "yoga", 5, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (10, "yoga block", "yoga", 14, 70);



SELECT * FROM products;