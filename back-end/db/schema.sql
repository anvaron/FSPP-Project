DROP DATABASE IF EXISTS ecommerce_dev;
CREATE DATABASE ecommerce_dev;

\c ecommerce_dev;

--
--DROP TABLE IF EXISTS public.users;
CREATE TABLE users
(
    user_id SERIAL NOT NULL,
    password character varying(200),
    email character varying(100) UNIQUE NOT NULL,
    fullname character varying(100),
    username character varying(50) UNIQUE NOT NULL,
    roles character varying(10)[] DEFAULT '{customer}'::character varying[] NOT NULL,
    address character varying(200),
    city character varying(100),
    state character varying(100),
    country character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id)
);

--
--DROP TABLE IF EXISTS tokens;
-- CREATE TABLE public.tokens
-- (
--     id SERIAL NOT NULL,
--     email character varying NOT NULL,
--     token character varying NOT NULL,
--     used boolean DEFAULT false NOT NULL,
--     expiration timestamp without time zone,
--     PRIMARY KEY (id)
-- );

CREATE TABLE public.product_category
(
    category_id SERIAL NOT NULL,
    name character varying(50) NOT NULL,
    description text NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    PRIMARY KEY (category_id)
);

--
--DROP TABLE IF EXISTS products;
CREATE TABLE public.products
(
    product_id SERIAL NOT NULL,
    name character varying(100) NOT NULL,
    price text NOT NULL,
    description text NOT NULL,
    condition character varying(100) NOT NULL,
    product_tags text,
    category_id integer NOT NULL, 
    image_url character varying,
    in_stock boolean DEFAULT false NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    PRIMARY KEY (product_id),
    CONSTRAINT fk_category
      FOREIGN KEY(category_id) 
	  REFERENCES product_category(category_id)
      ON DELETE CASCADE
);

--
--DROP TABLE IF EXISTS product_reviews;
CREATE TABLE public.product_reviews
(
    id SERIAL NOT NULL,
    user_id integer NOT NULL,
    content text NOT NULL,
    rating integer,
    product_id integer NOT NULL,
    date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, product_id)
);

--DROP TABLE IF EXISTS cart;
CREATE TABLE public.cart
(
    id SERIAL NOT NULL,
    user_id integer UNIQUE NOT NULL,
    PRIMARY KEY (id)
);

--
--DROP TABLE IF EXISTS cart_item;
CREATE TABLE public.cart_item
(
    id SERIAL NOT NULL,
    cart_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL CHECK (quantity > 0),
    PRIMARY KEY (id),
    UNIQUE (cart_id, product_id)
);

--
--DROP TABLE IF EXISTS order_item;
CREATE TABLE public.order_item
(
    id SERIAL NOT NULL,
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    PRIMARY KEY (id)
);

--
CREATE TYPE "payment" AS ENUM (
  'PAYSTACK',
  'STRIPE'
);

--
--DROP TABLE IF EXISTS orders;
CREATE TABLE public.orders
(
    order_id SERIAL NOT NULL,
    user_id integer NOT NULL,
    status character varying(20) NOT NULL,
    date timestamp without time zone DEFAULT CURRENT_DATE NOT NULL,
    amount real,
    total integer,
    ref character varying(100),
    payment_method payment,
    PRIMARY KEY (order_id)
);

--  *****************************
--      C O N S T R A I N T S
--  *****************************
--
ALTER TABLE public.cart
    ADD FOREIGN KEY (user_id)
    REFERENCES public.users (user_id)
    ON DELETE SET NULL
    NOT VALID;

--
ALTER TABLE public.cart_item
    ADD FOREIGN KEY (cart_id)
    REFERENCES public.cart (id)
    ON DELETE CASCADE
    NOT VALID;

--
ALTER TABLE public.cart_item
    ADD FOREIGN KEY (product_id)
    REFERENCES public.products (product_id)
    ON DELETE SET NULL
    NOT VALID;

--
ALTER TABLE public.order_item
    ADD FOREIGN KEY (order_id)
    REFERENCES public.orders (order_id)
    ON DELETE CASCADE
    NOT VALID;

--
ALTER TABLE public.order_item
    ADD FOREIGN KEY (product_id)
    REFERENCES public.products (product_id)
    ON DELETE SET NULL
    NOT VALID;

--
ALTER TABLE public.orders
    ADD FOREIGN KEY (user_id)
    REFERENCES public.users (user_id)
    ON DELETE CASCADE
    NOT VALID;

-- 
-- ALTER TABLE public.products
--     ADD FOREIGN KEY (category_id)
--     REFERENCES public.product_category (category_id)
--     ON DELETE SET NULL
--     NOT VALID;

-- 
ALTER TABLE public.product_reviews
    ADD FOREIGN KEY (product_id)
    REFERENCES public.products (product_id)
    ON DELETE SET NULL
    NOT VALID;

--
ALTER TABLE public.product_reviews
    ADD FOREIGN KEY (user_id)
    REFERENCES public.users (user_id)
    ON DELETE SET NULL
    NOT VALID;

--
CREATE UNIQUE INDEX users_unique_lower_email_idx
    ON public.users (lower(email));

--
CREATE UNIQUE INDEX users_unique_lower_username_idx
    ON public.users (lower(username));