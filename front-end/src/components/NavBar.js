import axios from "axios";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import NavCategories from "./NavCategories";

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

  const navStyles = {
    'position' : 'absolute',
    'inset'    : '0px auto auto 0px',
    'margin'   : '0px',
    'transform': 'translate(0px, 10px)'
  }
 
  return (
    // <header className=" body-font bg-teal-400 sticky top-0 z-50" style={ navStyle }>
    //   <div className="container mx-auto flex flex-wrap py-10 flex-col md:flex-row items-center">
    //     <nav className="flex justify-start lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    //       <Link
    //         to="/"
    //         className="mr-5 text-white hover:text-gray-200 text-2xl font-bold"
    //       >
    //         Home
    //       </Link>
    //       <Link
    //         to="/products/new"
    //         className="mr-5 text-white hover:text-gray-200 text-2xl font-bold"
    //       >
    //         Sell
    //       </Link>
    //       <Link
    //         to="/products"
    //         className="mr-5 text-white hover:text-gray-200 text-2xl font-bold"
    //       >
    //         Buy
    //       </Link>
    //       <Link
    //         to="/categories"
    //         className="mr-5 text-white hover:text-gray-200 text-2xl font-bold"
    //       >
    //         Categories
    //       </Link>
    //     </nav>
    //     <div className="lg:w-2/5 inline-flex lg:justify-end ml-0 md:ml-5 lg:ml-0">
    //     <Link
    //         to="/signup"
    //         className="mr-5 text-white hover:text-gray-200 text-xl font-bold"
    //       >
    //         Signup
    //       </Link>
    //       <Link
    //         to="/signin"
    //         className="mr-5 text-white hover:text-gray-200 text-xl font-bold"
    //       >
    //         Signin
    //       </Link>
          
    //       {/* <button
    //         onClick={() => handleClick()}
    //         type="button"
    //         className=" inline-flex 
    //                     items-center 
                        
    //                     border-0 
    //                     py-1 px-3 
    //                     text-xl 
    //                     text-white
    //                     font-bold
    //                     text-base 
    //                     mt-4 md:mt-0
    //         "
    //       >
    //         Cart: {(cartTotal === undefined) ? '0' : cartTotal} 
    //       </button> */}
    //     </div>
    //   </div>
    // </header>

    
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-teal-400 sticky top-0 z-50">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
  <span className="block text-gray-500 text-lg md:text-lg font-bold italic leading-0">
    EZ<b className="px-2 py-1 mt-2 text-lg md:text-lg bg-teal-600 text-white no-italic rounded-md shadow">Trade</b>
  </span>
  </a>
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 py-2 px-4 text-sm bg-gray-800 text-white font=bold rounded-md md:mr-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        {/* <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/> */}
        Sign up
      </button>
      {/* <!-- Dropdown menu --> */}
      <div class="hidden z-50 my-4 text-base list-none rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" 
        style={navStyles}
      >
        <div class="py-3 px-4">
          <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul class="py-1" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul class="flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
      <li>
        {/* <a href="#" 
        class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page"
        >Home</a> */}

        <Link
          to="/"
          className="mr-5 text-white hover:text-gray-200 text-xl font-bold"
        >
          Home
        </Link>
      </li>
      {/* <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li> */}
      <li>
        <Link
          to="/products/new"
          className="mr-5 text-white hover:text-gray-200 text-xl font-bold"
        >
          Sell
        </Link>
      </li>
      <li>
        <Link
          to="/products"
          className="mr-5 text-white hover:text-gray-200 text-xl font-bold"
        >
          Buy
        </Link>
      </li>
      <li>
        <Link
          to="/categories"
          className="mr-5 text-white hover:text-gray-200 text-xl font-bold"
        >
          Categories
        </Link>
      </li>
    </ul>
  </div>
  </div>
</nav>


  );
}