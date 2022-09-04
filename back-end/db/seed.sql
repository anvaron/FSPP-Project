\c ecommerce_dev;

INSERT INTO product_category (category_id, label) 
VALUES (1, 'Dog Food');
INSERT INTO product_category (category_id, label) 
VALUES (2, 'Cat Food');

-- Seed data for products table 
INSERT INTO products (product_id, name, price, description, product_tags, category_id, image_url, in_stock) 
VALUES (
  1, 
  'Wild-Caught Salmon & Ancient Grains Dry Dog Food', 
  25.98, 
  'This delicious recipe is made with real beef and other high-quality ingredients, giving him a wholesome meal option that you can both feel good about. With 23 essential vitamins and minerals in every serving, this dry dog food helps support your dog`s overall health and wellness.',
  'Wild-Caught Pacific Salmon, Oats, Ocean Whitefish Meal, Sorghum',
  1, 
  'https://cdn.shopify.com/s/files/1/0016/2509/6305/products/PDP_AGDog_SALMON_01_Hero_548x768_crop_center.png?v=1636655528',
  true
);
INSERT INTO products (product_id, name, price, description, product_tags, category_id, image_url, in_stock) 
VALUES (
  2, 
  'Surf & Turf Freeze Dried Raw Dog Food', 
  12.98, 
  'This delicious kitty kibble is loaded with protein to encourage healthy muscles, essential fatty acids to help support healthy skin and coat, and a crunchy texture to keep her teeth clean.',
  'Wild-Caught Pacific Salmon, Oats, Ocean Whitefish Meal, Sorghum',
  1, 
  'https://cdn.shopify.com/s/files/1/0016/2509/6305/products/PDP_FDR_SURF_01_Hero_2b6e4c33-9db8-499e-9234-37012f59d3a9_548x768_crop_center.png?v=1636949721',
  true
);
INSERT INTO products (product_id, name, price, description, product_tags, category_id, image_url, in_stock) 
VALUES (
  3, 
  'Wild-Caught Salmon Dry Cat Food', 
  28.99, 
  'This flavorful fishy kibble helps support healthy skin & coat and is a terrific source of Omega 3 fatty acids and DHA, thanks to a mix of Ocean Wise® approved wild-caught salmon and functional ingredients.',
  'Wild-Caught Pacific Salmon, Oats, Ocean Whitefish Meal, Sorghum',
  2, 
  'https://cdn.shopify.com/s/files/1/0016/2509/6305/products/PDP_Cat_SALMON_01_Hero_548x768_crop_center.png?v=1636655539',
  true
);
INSERT INTO products (product_id, name, price, description, product_tags, category_id, image_url, in_stock) 
VALUES (
  4, 
  'Harvest Chicken & Ancient Grains Dry Dog Food', 
  19.99, 
  'This hearty kibble is a great nutrient-dense source of energy, thanks to a carefully made blend of humanely raised chicken and ancient grains, such as steel-cut oats and quinoa — not to mention added superfoods.',
  'Wild-Caught Pacific Salmon, Oats, Ocean Whitefish Meal, Sorghum',
  1, 
  'https://cdn.shopify.com/s/files/1/0016/2509/6305/products/PDP_AGDog_CHICKEN_01_Hero_548x768_crop_center.png?v=1636655029',
  false
);

INSERT INTO users (password, email, fullname, username, google_id, roles, address, city, state, country) 
VALUES (
  '123456', 
  'anvaron@gmail.com',
  'Andres Varon',
  'admin',
  '001',
  '{admin}',
  '1337 Dev St NY',
  'NYC',
  'NY',
  'USA'
);
INSERT INTO users (password, email, fullname, username, google_id, roles, address, city, state, country) 
VALUES (
  'test', 
  'johndoe@gmail.com',
  'John Doe',
  'jdoe',
  '002',
  '{customer}',
  '244 44th Boulevard Av NY',
  'NYC',
  'NY',
  'USA'
);