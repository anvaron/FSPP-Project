DROP DATABASE IF EXISTS ecommerce_dev;
CREATE DATABASE ecommerce_dev;

\c ecommerce_dev;

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

CREATE TABLE public.product_category
(
    category_id SERIAL NOT NULL,
    name character varying(50) NOT NULL,
    description text NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    icon text,
    image character varying,
    PRIMARY KEY (category_id)
);

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
    in_stock integer, CHECK (in_stock > 0),
    is_active boolean DEFAULT true NOT NULL,
    PRIMARY KEY (product_id),
    CONSTRAINT fk_category
      FOREIGN KEY(category_id) 
	  REFERENCES product_category(category_id)
      ON DELETE CASCADE
);

--DROP TABLE IF EXISTS product_reviews;
CREATE TABLE public.product_reviews
(
    review_id SERIAL NOT NULL,
    username text NOT NULL,
    email character varying(100),
    content text NOT NULL,
    rating integer, CHECK (rating >= 1 AND rating <= 5),
    product_id integer NOT NULL,
    date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (review_id)
);

--  *****************************
--      C O N S T R A I N T S
--  *****************************
--
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
    ON DELETE CASCADE