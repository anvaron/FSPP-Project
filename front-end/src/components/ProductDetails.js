import axios from "axios";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews";
import assert from "assert";

export default function ProductDetails() {
  const { id } = useParams();

  const { addItem } = useCart();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [favorites, setFavorites] = useState(0);

  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  /*
  **********************************
    PRODUCT DATA
  **********************************
   */
  useEffect(() => {
    axios
      .get(`${API}/products/${id}`)
      .then((res) => {
        setProduct(res.data.payload);
      })
      .catch((error) => {
        navigate('/not-found')
        console.log(error)
      });

  }, [id, navigate]);

  const deleteProduct = async () => {
    await axios
      .delete(`${API}/products/${id}`)
      .then((response) => {
        
      })
      .catch((error) => {
        console.error("catch", error);
        console.warn(error)
      })  
  };
  
  const calculateTotal = () => {
    //setTotal(product.price);
  };
  
  const quantityOptions = () => {
    let options = [];
    for(let i=1; i<=10; i++) {
      options.push({'value':i});
    }
    return options;
  };
  

  // HANDLERS
  const handleClick = () => {
    navigate(`/products`);
  };

  const handleDelete = async () => {
    deleteProduct().setTimeout(() => {
        navigate(`/products`);
      }, 3000);
  };

  const handleEdit = () => {
    navigate(`/products/${id}/edit`);
  };

  const handleAddFavorites = () => {
    const favorites = {
      id: product.id,
      product: product.name,
      price: product.price,
    } 
    localStorage.setItem(
      'favorites', JSON.stringify(favorites)
    );
      setFavorites(localStorage.length)
  };
  
  return (
    <>
    <div className="container text-center ">
      <div className="relative bg-white p-4">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center relative">
          <div className="mt-0 absolute top-0 right-0">
              <button 
                id="dropdownDefault" 
                data-dropdown-toggle="dropdown" 
                class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                type="button"
              >
                Manage Product
                <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                  <li>
                    <button
                      onClick={() => handleClick()}
                      type="button" 
                      className="w-full py-2 px-4 hover:bg-gray-100 text-left"
                      data-bs-toggle="tooltip" data-bs-placement="top" title="Back to snacks"
                    >
                      Go to Products
                    </button>
                  </li>
                  <li>
                    <button 
                      class="w-full py-2 px-4 hover:bg-gray-100 text-left"
                      type="button" 
                      data-modal-toggle="popup-modal"
                    >
                      Delete Product
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleEdit()}
                      type="button" 
                      className="w-full py-2 px-4 hover:bg-gray-100 text-left"
                      data-bs-toggle="tooltip" data-bs-placement="top" title="Submit data"
                    > 
                      Edit Product
                    </button>
                  </li>
                </ul>
              </div>
          </div>
          <div className="lg:col-start-2 md:pl-20">
            <div className="text-xl font-bold text-teal-500 text-left">
              {product.category}
            </div>
            <h2 className="text-4xl mt-4 mb-4 text-left font-bold text-gray-900 tracking-tight sm:leading-9 leading-10">
              {product.name}
            </h2>
            <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white rounded-lg shadow">
              <ul className="w-full flex flex-col divide divide-y">
                <li className="flex flex-row">
                  <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                    <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto object-center" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-6h-2v-2h4v8zm-1-9.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>
                    </div>
                    <div className="flex-1 pl-1 mr-16">
                      <div className="font-medium text-left">
                        Condition: <span className="font-bold text-teal-600">{product.condition}</span>
                      </div>
                    </div>
                    <div className="text-gray-600 text-xs">
                      <span className="text-4xl font-bold text-teal-600">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex flex-row">
                  <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                    <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3.514 6.61c-.317.179-.514.519-.514.887v8.95c0 .37.197.708.514.887 1.597.901 6.456 3.639 8.005 4.512.152.085.319.128.487.128.164 0 .328-.041.477-.123 1.549-.855 6.39-3.523 7.994-4.408.323-.177.523-.519.523-.891v-9.055c0-.368-.197-.708-.515-.887-1.595-.899-6.444-3.632-7.999-4.508-.151-.085-.319-.128-.486-.128-.168 0-.335.043-.486.128-1.555.876-6.405 3.609-8 4.508m15.986 2.115v7.525l-6.75 3.722v-7.578zm-15 7.425v-7.458l6.75 3.75v7.511zm.736-8.769 6.764-3.813 6.801 3.834-6.801 3.716z" fillRule="nonzero"/></svg>
                    </div>
                    {/* <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-left">
                        :
                      </div>
                    </div> */}
                    <div className="text-gray-600 text-xs">
                    {(product.product_tags) 
                    ?
                      <span className="px-4 py-1 text-sm font-bold rounded-full text-white bg-blue-800 ">
                        {product.product_tags}
                      </span>
                    : null
                    }
                    </div>
                  </div>
                </li>
                <li className="flex flex-row">
                  <div className="select-none cursor-pointer items-center p-4">
                    <div className="w-full my-2">
                      <div className="font-bold text-lg text-left">
                        Description:
                      </div>
                    </div>
                    <div className="text-gray-600 text-xs text-justify">
                      <span className="text-base font-normal text-gray-500 ">
                        {product.description} 
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex flex-row">
                  <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                    
                    <div className="flex-1 pl-1 mr-16">
                      <div className="font-medium text-left">
                        <div class="w-7/12 flex items-center">
                            <button 
                              type="button" 
                              class="w-full flex items-center border-l border-t border-b text-base font-medium rounded-l-md text-black bg-white hover:bg-gray-100 pl-2 pr-0 py-2"
                              onClick={(e) => handleAddFavorites(e)} 
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-4" fill="currentColor" viewBox="0 0 1792 1792">
                                <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                              </svg>
                              Add to favorites
                            </button>
                            <button type="button" class="w-16 border text-base font-medium rounded-r-md text-black bg-white hover:bg-gray-100 px-4 py-2">
                              {favorites}
                            </button>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-600 text-xs">
                      <button 
                        type="button" 
                        class="py-2 px-10 flex justify-center items-center bg-teal-400 hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 ">
            <div className="flex-shrink-0 absolute top-2 right-2 z-40">
              <div className="p-4 flex items-center mx-auto justify-center">
              {(product.in_stock >= 1)
                ?
                <span className="p-2 bg-teal-600 text-white text-md font-bold rounded-sm">In Stock</span>
                : 
                <span className="p-2 bg-red-400 text-white text-md font-bold rounded-sm">Out of Stock</span>
              }
              </div>
            </div>
            <div className="container bg-teal-200 shadow ">
              <img src={product.image_url} alt={product.name} className="w-8/12 relative mx-auto"/>
            </div>
          </div>
        </div>
    </div>
    <div className="relative bg-white p-4">
      <Reviews  />
    </div>
  </div>
  <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Close modal</span>
              </button>
              <div class="p-6 text-center">
                  <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                  <button
                    onClick={(e) => handleDelete(e)} 
                    data-modal-toggle="popup-modal"
                    type="button" 
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Delete data"
                  >
                    Proceed
                  </button>
                  <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
              </div>
          </div>
      </div>
  </div>
  </>
  );
}