import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
//import { useCart } from "context/CartContext";
import Product from "./Product";

const API = process.env.REACT_APP_API_URL;

export default function Products( props ) {
  const [products, setProducts] = useState([]);
  const { categoryId } = props;
  

  let route = '';
  (categoryId === undefined) 
  ?
    route = `products`
  :
    route = `products/${categoryId}`;


  useEffect(() => {
    toast.promise(
        axios
        .get(`${API}/products`)
        .then(({ data }) => {
          setProducts(data.payload)
        }),
      {
        loading: 'Loading...',
        success: 'Data fetched successfully',
        error: (err) =>
          err?.response?.data?.msg ?? 'Something is wrong, Please try again',
      }
    );
  }, []);

  return (
    <div className="w-full bg-gray-100">
      <Toaster />
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 grid-flow-row px-4 py-6 gap-10">
        {products.map((product) => {
          return <Product key={product.id} product={product} />
        })}
      </div>
    </div>
  );
}