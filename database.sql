-- CREATE DATABASE pizzas;
CREATE TABLE pizzaOrders (
    id SERIAL PRIMARY KEY,
    flavour VARCHAR(100) NOT NULL,
    qty int NOT NULL,
    cost int NOT NULL,
);