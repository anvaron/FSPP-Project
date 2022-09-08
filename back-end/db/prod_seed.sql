\c ddna8l2vuf44cn;


INSERT INTO product_category (
  name, description, icon) 
VALUES (
  'Electronics', 
  'Electronic items',
  '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.563 24h-11.563c-1.104 0-2-.896-2-2v-20c0-1.104.896-2 2-2h14c1.104 0 2 .896 2 2v4h-2v-3h-14v17h11v2.5c0 .524.182 1.175.563 1.5zm8.937-17c.828 0 1.5.672 1.5 1.5v14c0 .826-.671 1.5-1.5 1.5h-7c-.829 0-1.5-.675-1.5-1.5v-14c0-.827.673-1.5 1.5-1.5h7zm-13.5 14c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm10 2c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm4-3v-10.024h-8v10.024h8zm-3.5-11c.275 0 .5-.224.5-.5s-.225-.5-.5-.5h-1c-.276 0-.5.224-.5.5s.224.5.5.5h1z"/></svg>'
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
  name, description, icon) 
VALUES (
  'Vehicles', 
  'Everything for vehicles',
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.5 7c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202zm-1.441 3.506c.639 1.186.946 2.252.946 3.666 0 1.37-.397 2.533-1.005 3.981v1.847c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1h-13v1c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1.847c-.608-1.448-1.005-2.611-1.005-3.981 0-1.414.307-2.48.946-3.666.829-1.537 1.851-3.453 2.93-5.252.828-1.382 1.262-1.707 2.278-1.889 1.532-.275 2.918-.365 4.851-.365s3.319.09 4.851.365c1.016.182 1.45.507 2.278 1.889 1.079 1.799 2.101 3.715 2.93 5.252zm-16.059 2.994c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm10 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm2.941-5.527s-.74-1.826-1.631-3.142c-.202-.298-.515-.502-.869-.566-1.511-.272-2.835-.359-4.441-.359s-2.93.087-4.441.359c-.354.063-.667.267-.869.566-.891 1.315-1.631 3.142-1.631 3.142 1.64.313 4.309.497 6.941.497s5.301-.184 6.941-.497zm2.059 4.527c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-18.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2z"/></svg>'
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