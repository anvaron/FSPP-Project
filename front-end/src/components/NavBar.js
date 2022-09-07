import axios from "axios";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
//import { useCart } from "../context/CartContext";

export default function NavBar() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [categories, setCategories] = useState([]);
  
  // const { cartTotal } = useCart(0);
  // //console.log(cartTotal)
  // const handleClick = () => {
  //   //navigate(`/snacks/new`);
  // }

  useEffect(() => {
    axios
      .get(`${API}/categories/`)
      .then((res) => {
        setCategories(res.data.payload);
      })
      .catch((error) => console.log(error));
  }, []);

  // const getData = async (id) => {
  
  //   await axios
  //     .get(`${API}/products/category/${id}`)
  //     .then(({ data }) => setProducts(data.payload))
  //     .catch((error) => console.log(error));
  // };

  const handleClick = (id) => {
    // console.log(category)
    navigate(`/category/${id}`);
    //getData(category);
  };

  const navStyle = {
    'zIndex' : '1000',
  }
 
  return (
    <header className=" body-font bg-teal-400 sticky top-0 z-50" style={ navStyle }>
      <div className="container mx-auto flex flex-wrap py-10 flex-col md:flex-row items-center">
        <nav className="flex justify-start lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link
            to="/"
            className="mr-5 text-white hover:text-gray-200 text-2xl font-bold"
          >
            Home
          </Link>
          <Link
            to="/products/new"
            className="mr-5 text-white hover:text-gray-200 text-2xl font-bold"
          >
            Sell
          </Link>
          <Link
            to="/products"
            className="mr-5 text-white hover:text-gray-200 text-2xl font-bold"
          >
            Buy
          </Link>
          <Link
            to="/products/category/1"
            className="mr-5 text-white hover:text-gray-200 text-2xl font-bold"
          >
            Categories
          </Link>
        </nav>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-0 md:ml-5 lg:ml-0">
        <Link
            to="/signup"
            className="mr-5 text-white hover:text-gray-200 text-xl font-bold"
          >
            Signup
          </Link>
          <Link
            to="/signin"
            className="mr-5 text-white hover:text-gray-200 text-xl font-bold"
          >
            Signin
          </Link>
          
          {/* <button
            onClick={() => handleClick()}
            type="button"
            className=" inline-flex 
                        items-center 
                        
                        border-0 
                        py-1 px-3 
                        text-xl 
                        text-white
                        font-bold
                        text-base 
                        mt-4 md:mt-0
            "
          >
            Cart: {(cartTotal === undefined) ? '0' : cartTotal} 
          </button> */}
        </div>
      </div>

      <div class="w-full flex flex-wrap items-center bg-gray-600 hidden md:block">
      <div className="w-10/12 mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center gap-4">
        {categories.map((category) => (
          <button 
            className=" px-4 py-2 text-md font-semibold text-gray-100 transition ease-in duration-200 rounded-full hover:bg-gray-800 hover:text-white border-1 border-gray-200 focus:outline-none"
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </button>
        ))}   
      </div>
      </div>
    </header>
  );
}