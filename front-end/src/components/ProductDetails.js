import axios from "axios";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews";

export default function ProductDetails() {
  const { id } = useParams();
  console.log('prod_details:', id)

  const { addItem } = useCart();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  // const [reviews, setReviews] = useState([]);
  // const [review, setReview] = useState({
  //   user: "",
  //   rating: 5,
  //   content: "",
  //   product_id: id
  // });

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
      .catch((error) => console.log(error));
  }, [id]);

  // Delete product, trigger modal
  const deleteProduct = () => {
    axios
      .delete(`${API}/products/${id}`)
      .then(() => {
        navigate(`/products`);
      })
      .catch((error) => console.error("catch", error));
  };
  
  /*
  **********************************
    REVIEWS DATA
  **********************************
   */
  
  // useEffect(() => {
  //   axios
  //     .get(`${API}/reviews/${id}`)
  //     .then((res) => {
  //       setReviews(res.data.payload);
  //       console.log(res.data.payload)
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  
  // Create product review
  // const createReview = (review) => {
  //   console.log(review)
  //   axios
  //     .post(`${API}/reviews`, review)
  //     .then(() => {
  //       //navigate(`/products`);
  //       //notify();
  //     })
  //     .catch((error) => console.warn("catch", error));
  // };

  
  const calculateTotal = () => {
    console.log(product.price)
    //setTotal(product.price);
  };
  
  const quantityOptions = () => {
    let options = [];
    for(let i=1; i<=10; i++) {
      options.push({'value':i});
    }
    //console.log(product.price)
    //setTotal(product.price);
    return options;
  };

  // HANDLERS
  const handleClick = () => {
    navigate(`/products`);
  };

  const handleDelete = () => {
    deleteProduct();
  };

  const handleEdit = () => {
    navigate(`/products/${id}/edit`);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await addItem(product, quantity);
  // };
  
  // const addToCart = async (e) => {
  //   e.preventDefault();
  //   await addItem(product, 1);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await createReview(review);
  // };

  return (
    <div className="container text-center ">
      {/* Modal dialog */}
        <div className="relative z-10 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg font-bold leading-6 text-gray-900" id="modal-title">Deleteing product</h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Comfirm you want to delete this product? 
                          <br/>
                          This action cannot be <b>undone.</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button 
                    type="button" 
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => handleDelete()}  
                  >
                      Delete
                  </button>
                  <button 
                    type="button" 
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Modal dialog */}
      <div className="relative bg-white p-4">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
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
                      <span className="text-4xl font-bold text-gray-900">
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
                        Protein:
                      </div>
                    </div> */}
                    <div className="text-gray-600 text-xs">
                    {(product.product_tags) 
                    ?
                    <span className="px-4 py-1 text-base rounded-full text-white bg-blue-800 ">
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
                    <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                      
                    </div>
                    <div className="flex-1 pl-1 mr-16">
                      <div className="font-medium text-left">
                        
                      </div>
                    </div>
                    <div className="text-gray-600 text-xs">
                      <div className="flex items-center mt-0">
                        <button
                          onClick={() => handleClick()}
                          type="button" 
                          className="w-full items-center border-l border-t border-b text-base font-bold rounded-l-md bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 px-4 py-4"
                          data-bs-toggle="tooltip" data-bs-placement="top" title="Back to snacks"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" 
                              className="w-4 h-4 mx-auto object-center" fill="#FFFFFF" viewBox="0 0 24 24">
                            <path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z"/>
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete()} 
                          type="button" 
                          className="w-full items-center border text-base font-bold bg-gray-900 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 px-4 py-4"
                          data-bs-toggle="tooltip" data-bs-placement="top" title="Delete data"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" 
                              className="w-4 h-4 mx-auto object-center" fill="#FFFFFF" viewBox="0 0 24 24">
                            <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"/>
                          </svg>
                        </button>
                        <button
                          onClick={() => handleEdit()}
                          type="button" 
                          className="w-full items-center border-t border-b border-r text-base font-bold rounded-r-md bg-gray-900 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 px-4 py-4"
                          data-bs-toggle="tooltip" data-bs-placement="top" title="Submit data"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-auto object-center" fill="#FFFFFF" viewBox="0 0 24 24"><path d="M18.31 2.828l2.862 2.862-15.032 15.032-3.583.722.723-3.585 15.03-15.031zm0-2.828l-16.872 16.872-1.438 7.128 7.127-1.437 16.873-16.874-5.69-5.689zm-.021 5.004l-12.728 12.728.707.708 12.728-12.728-.707-.708z"/></svg>
                        </button>
                      </div>  
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 ">
            <div className="flex-shrink-0 absolute top-2 right-2 z-50">
              <div className="p-4 flex items-center mx-auto justify-center">
              {product.in_stock 
                ?
                <span className="p-2 bg-teal-600 text-white text-md font-bold rounded-sm">In Stock</span>
                // (<img className="max-h-40 w-full object-cover" src={heartSolid} alt="healthy food" />) 
                : 
                <span className="p-2 bg-red-400 text-white text-md font-bold rounded-sm">Out of Stock</span>
                // (<img className="max-h-40 w-full object-cover" src={heartRegular} alt="unhealthy food" />)
              }
              </div>
            </div>
            <div className=" ">
              <img src={product.image_url} alt={product.name} className="w-8/12 relative mx-auto"/>
            </div>
          </div>
        </div>
    </div>
    <div className="relative bg-white p-4">
      <Reviews />
    </div>
  </div>
  );
}