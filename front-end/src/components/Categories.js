import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Category from "./Category";

const API = process.env.REACT_APP_API_URL;

export default function Categories( ) {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    toast.promise(
        axios
        .get(`${API}/categories`)
        .then(({ data }) => {
          setCategories(data.payload)
        }),
      {
        loading: 'Loading...',
        success: 'Data fetched successfully',
        error: (err) =>
          err?.response?.data?.msg ?? 'Something is wrong, please try again',
      }
    );
  }, []);

  const getProductsByCategory = async (categoryId) => {
    
  };

  const handleClick = async (id) => {
    navigate(`/products?category=${id}`);
    // await axios
    //   .get(`${API}/products?category=${id}`)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       navigate(`/products`);
    //     }
    //   })
    //   .catch((error) => console.log(error));
  }

  return (
    <div className="w-full bg-teal-100">
      <Toaster />
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 grid-flow-row p-10 gap-10">
        {categories.map((category) => {
          return <Category key={category.id} category={category} handleClick={handleClick}/>
        })} 
      </div>
    </div>
  );
}