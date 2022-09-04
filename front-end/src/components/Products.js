import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";

// const API = process.env.REACT_APP_API_URL;
const API = 'http://localhost:3345';

export default function Products() {

  const [products, setProducts] = useState([]);
  
  const getData = async () => {
    await axios
      .get(`${API}/products/`)
      .then(({ data }) => setProducts(data.payload))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full bg-teal-400">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 grid-flow-row p-4 gap-10">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}