\c ecommerce_dev;


INSERT INTO product_category (
  name, description) 
VALUES (
  'Electronics', 
  'Electronic items'
);
INSERT INTO product_category (
  name, description) 
VALUES (
  'Home', 
  'Everything for decoration and home improvements'
);
INSERT INTO product_category (
  name, description) 
VALUES (
  'Clothing', 
  'Clothing trends'
);
INSERT INTO product_category (
  name, description) 
VALUES (
  'Baby', 
  'Everything for baby care'
);
INSERT INTO product_category (
  name, description) 
VALUES (
  'Hobbies', 
  'Everything for hobbies'
);
INSERT INTO product_category (
  name, description) 
VALUES (
  'Vehicles', 
  'Everything for vehicles'
);
INSERT INTO product_category (
  name, description) 
VALUES (
  'Sports', 
  'Everything for Sports and activities'
);
INSERT INTO product_category (
  name, description) 
VALUES (
  'Collectibles', 
  'Everything for Collectibles'
);
INSERT INTO product_category (
  name, description) 
VALUES (
  'Beauty', 
  'Everything for Beauty'
);
INSERT INTO product_category (
  name, description) 
VALUES (
  'Pets', 
  'Everything for Our Pets'
);

-- -- Seed data for products table 
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Morpilot Dog Carrier', 
  '32.98', 
  'Like new. Used once. In good condition. From smoke free home',
  'Used',
  'Pet Supplies',
  10, 
  'http://img.dummy-image-generator.com/sport/dummy-600x600-Basketball.jpg',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'AirPod Pro bods', 
  '60', 
  'New. Sealed package.',
  'New',
  'Audio',
  1, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Nike men T-shirt Sport', 
  '60', 
  'Nike men shoes size M - Sealed box',
  'New',
  'Fashion',
  3, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Nike men shoes', 
  '80', 
  'Nike men shoes size 9 - Sealed box',
  'New',
  'Sneakers',
  3, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Macbook Pro', 
  '500', 
  'Macbook Pro for graphic design, coding - Sealed box',
  'New',
  'PC, Laptops',
  1, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Nike men shoes', 
  '80', 
  'Nike men shoes size 9 - Sealed box',
  'New',
  'Sneakers',
  3, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Dining Table Like New', 
  '300', 
  'Dining Table Like New - Slight used',
  'New',
  'Furniture',
  4, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Nike kids shoes', 
  '80', 
  'Nike men shoes size 5 - Sealed box',
  'New',
  'Sneakers',
  3, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Nike men shoes', 
  '80', 
  'Nike men shoes size 8 - Once Used',
  'Used',
  'Sneakers',
  3, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Nike men shoes', 
  '80', 
  'Nike men shoes size 9 - Sealed box',
  'New',
  'Sneakers',
  3, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Adidas women shoes', 
  '80', 
  'Adidas men shoes size 6 - Sealed box',
  'New',
  'Sneakers',
  3, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Smartwatch FX200', 
  '100', 
  'Smartwatch FX200 - Sealed box',
  'New',
  'Gadgets',
  1, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Graco car seat Used', 
  '120', 
  'Great condition, used a few month, fully functional. Sell as it condition, no return or refund. Photo showed the actual item, not from internet.',
  'New',
  'Car Seats',
  4, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  '2018 Mercedes-Benz GLC', 
  '47,000', 
  'Air Conditioning, Climate Control, Dual Zone Climate Control, Cruise Control, Tinted Windows, Power Steering, Power Windows, Power Door Locks, Power Mirrors, Leather Steering Wheel, Leather Shifter, Power Drivers Seat, Power Passenger Seat, Memory Seat Position, Heated Seat, Clock, Tachometer, ',
  'Used',
  'Luxury SUV',
  1, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  '2015 BMW X5', 
  '23,895', 
  '2015 BMW X5 One owner - like new ',
  'Used',
  'Cars',
  6, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Electric Guitar', 
  '150', 
  'Electric guitar with gig bag - like new Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Used',
  'Musical Instruments',
  5, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  '2012 Porsche Cayenne', 
  '29,895', 
  '2012 Porsche Cayenne, One owner - like new ',
  'Used',
  'SUV',
  6, 
  'https://fakeimg.pl/600x600/',
  true,
  true
);



INSERT INTO users (password, email, fullname, username, roles, address, city, state, country) 
VALUES (
  '123456', 
  'anvaron@gmail.com',
  'Andres Varon',
  'admin',
  '{admin}',
  '1337 Dev St NY',
  'NYC',
  'NY',
  'USA'
);
INSERT INTO users (password, email, fullname, username, roles, address, city, state, country) 
VALUES (
  'test', 
  'johndoe@gmail.com',
  'John Doe',
  'jdoe',
  '{customer}',
  '244 44th Boulevard Av NY',
  'NYC',
  'NY',
  'USA'
);

INSERT INTO product_reviews (username, email, content, rating, product_id) 
VALUES (
  'John Doe', 
  'johndoe@gmail.com',
  'Great product',
  2,
  3
);