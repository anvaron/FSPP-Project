\c ecommerce_dev;

-- Seed data for table: product_category  
INSERT INTO product_category (
  name, description, image) 
VALUES (
  'Electronics', 
  'Everything about Gadgets & Devices',
  'https://fakeimg.pl/400x200'
);
INSERT INTO product_category (
  name, description, image) 
VALUES (
  'Home', 
  'Everything for Home, Improvements',
  'https://fakeimg.pl/400x200'
);
INSERT INTO product_category (
  name, description, image) 
VALUES (
  'Clothing', 
  'Clothing trends, Fashion, Specials',
  'https://fakeimg.pl/400x200'
);
INSERT INTO product_category (
  name, description, image) 
VALUES (
  'Baby', 
  'Everything for Baby care products',
  'https://fakeimg.pl/400x200'
);
INSERT INTO product_category (
  name, description, image) 
VALUES (
  'Hobbies', 
  'Everything for our Hobbies and Entertainment',
  'https://fakeimg.pl/400x200'
);
INSERT INTO product_category (
  name, description, image) 
VALUES (
  'Vehicles', 
  'Everything about Vehicles, Accesories, Parts',
  'https://fakeimg.pl/400x200'
);
INSERT INTO product_category (
  name, description, image) 
VALUES (
  'Sports', 
  'Everything for Sports and Outdoor Activities',
  'https://fakeimg.pl/400x200'
);
INSERT INTO product_category (
  name, description, image) 
VALUES (
  'Collectibles', 
  'Everything for Collectibles Junkies',
  'https://fakeimg.pl/400x200'
);
INSERT INTO product_category (
  name, description, image) 
VALUES (
  'Beauty', 
  'Everything for Beauty, Healthcare and Wellness',
  'https://fakeimg.pl/400x200'
);
INSERT INTO product_category (
  name, description, image) 
VALUES (
  'Pets', 
  'Everything for Our Beloved Pets',
  'https://fakeimg.pl/400x200'
);

-- Seed data for table: products  
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'Morpilot Dog Carrier', 
  '32.98', 
  'Like new. Used once. In good condition. From smoke free home',
  'Used',
  'Pet Supplies',
  10, 
  'http://img.dummy-image-generator.com/sport/dummy-600x600-Basketball.jpg',
  1,
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
  2,
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
  10,
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
  2,
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
  1,
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
  12,
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
  1,
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
  20,
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
  20,
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
  20,
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
  20,
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
  2,
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
  1,
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
  1,
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
  2,
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
  2,
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
  1,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  '2020 Tesla Model 3', 
  '42,000', 
  'Wonderful Tesla Model 3, One owner - Like new, Just 20 Miles ',
  'Used',
  'EV Cars',
  6, 
  'https://picsum.photos/id/1071/600/600',
  1,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  '2022 Ferrari GTI-9000', 
  '80,000', 
  'Wonderful Super Car, One owner - Like new, Just 20 Miles ',
  'Used',
  'Cars',
  6, 
  'https://picsum.photos/id/1072/600/600',
  1,
  true
);
INSERT INTO products (name, price, description, condition, product_tags, category_id, image_url, in_stock, is_active) 
VALUES (
  'MacBook Air Pro', 
  '10000', 
  'Wonderful MacBook Air Pro One owner - Like new, Great for Graphic Design - Renders ',
  'Used',
  'Laptops',
  1, 
  'https://picsum.photos/id/119/600/600',
  1,
  true
);

-- Seed data for table: users  
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