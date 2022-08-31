\c ecommerce_dev;

INSERT INTO product_category (category_id, label) 
VALUES (1, 'Dog Food');
INSERT INTO product_category (category_id, label) 
VALUES (2, 'Cat Food');

-- Seed data for products table 
INSERT INTO products (product_id, name, price, description, category_id, image_url, in_stock) 
VALUES (
  1, 
  'Dog Chow Complete with Real Beef Dry Dog Food, 42-lb bag', 
  25.98, 
  'This delicious recipe is made with real beef and other high-quality ingredients, giving him a wholesome meal option that you can both feel good about. With 23 essential vitamins and minerals in every serving, this dry dog food helps support your dog`s overall health and wellness.',
  1, 
  'https://image.chewy.com/is/image/catalog/536798_MAIN._AC_SL1200_V1653575186_.jpg',
  true
);
INSERT INTO products (product_id, name, price, description, category_id, image_url, in_stock) 
VALUES (
  2, 
  'Friskies Surfin & Turfin Favorites Dry Cat Food', 
  12.98, 
  'This delicious kitty kibble is loaded with protein to encourage healthy muscles, essential fatty acids to help support healthy skin and coat, and a crunchy texture to keep her teeth clean.',
  2, 
  'https://image.chewy.com/is/image/catalog/76421_MAIN._AC_SL1200_V1657661022_.jpg',
  true
);



