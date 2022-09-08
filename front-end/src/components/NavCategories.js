import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavCategories() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${API}/categories/`)
      .then((res) => {
        setCategories(res.data.payload);
      })
      .catch((error) => console.log(error));
  }, []);

 
  
  const handleClick = (id) => {
    
    navigate(`/products/category/${id}`);
  };

  return (
    <>
      <div className="w-full flex flex-wrap items-center bg-gray-600 hidden md:block">
      <div className="w-10/12 mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center gap-4">
        {categories.map((category) => (
          <Link
            to={`/products/${category.id}`}
            key={category.id}
            className=" px-4 py-2 text-md font-semibold text-gray-100 transition ease-in duration-200 rounded-full hover:bg-gray-800 hover:text-white border-1 border-gray-200 focus:outline-none"
            //onClick={() => handleClick(category.id)}
          >
            {category.name}
          </Link>
        ))}   
      </div>
      </div>
    </>
  );
}