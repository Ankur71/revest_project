-- Create the database
CREATE DATABASE sales_db;

-- Insert into Products
INSERT INTO public."Products" (
    id, name, price, description, "createdAt", "updatedAt", image
) VALUES
    (1, 'Product 1', 10.99, 'Description of Product 1', NOW(), NOW(), 'product1.jpg'),
    (2, 'Product 2', 15.99, 'Description of Product 2', NOW(), NOW(), 'product2.jpg'),
    (3, 'Product 3', 20.99, 'Description of Product 3', NOW(), NOW(), 'product3.jpg'),
    (4, 'Product 4', 25.99, 'Description of Product 4', NOW(), NOW(), 'product4.jpg'),
    (5, 'Product 5', 30.99, 'Description of Product 5', NOW(), NOW(), 'product5.jpg');

-- Insert into SalesOrders
INSERT INTO public."SalesOrders" (
    id, "customerName", email, "mobileNumber", status, "orderDate", "createdAt", "updatedAt"
) VALUES
    (1, 'Customer 1', 'customer1@example.com', '1234567890', 'Pending', NOW(), NOW(), NOW()),
    (2, 'Customer 2', 'customer2@example.com', '1234567891', 'Shipped', NOW(), NOW(), NOW()),
    (2, 'Customer 3', 'customer2@example.com', '1234567891', 'Shipped', NOW(), NOW(), NOW()),
    (2, 'Customer 4', 'customer2@example.com', '1234567891', 'Shipped', NOW(), NOW(), NOW()),
    (2, 'Customer 5', 'customer2@example.com', '1234567891', 'Shipped', NOW(), NOW(), NOW());

-- Insert into SalesOrderProducts
INSERT INTO public."SalesOrderProducts" (
    "createdAt", "updatedAt", "SalesOrderId", "ProductId"
) VALUES
    (NOW(), NOW(), 1, 1),
    (NOW(), NOW(), 1, 2),
    (NOW(), NOW(), 2, 3),
    (NOW(), NOW(), 2, 4),
    (NOW(), NOW(), 2, 5);
