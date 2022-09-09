import axios from "axios";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export default function ProductEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    condition: "",
    product_tags: "",
    category_id: "",
    image_url: "",
    in_stock: "",
  });

  // Load product categories
  useEffect(() => {
    axios
      .get(`${API}/categories/`)
      .then((res) => {
        setCategory(res.data.payload);
        
      })
      .catch((error) => console.log(error));
  }, []);

  
  useEffect(() => {
    axios
      .get(`${API}/products/${id}`)
      .then(
        (res) => setProduct(res.data.payload),
        (error) => navigate(`/not-found`)
      );
  }, [id, navigate]);

  console.log(category) 
  console.log(product) 
  const updateProduct = (product) => {
    axios
      .put(`${API}/products/${id}`, product)
      .then((response) => {
        if (response.status === 200) {
          {toast.success('Product edited successfully!');
          setTimeout(() => {
            navigate(`/products`);
          }, 3000);}
        } else { 
          toast.error('There was an error! Review your data and try again');
        }
      })
      .catch((error) => console.warn("catch", error));
  };
  
  // HANDLERS
  const handleTextChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  const handleClick = () => {
    navigate(`/products`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product)
    await updateProduct(product);
  };

  const conditionOptions = [
    { id: 0, value: 'Used', label: 'Used' },
    { id: 1, value: 'New', label: 'New' },
  ]

  const categoryOptions = category.map(({ id, name}) => (
    { 'value': id, 'label': name }
  ))

  return (
    <div className="w-full ">
      <Toaster />
      <form class=" flex space-x-3">
        <div class="w-full max-w-2xl p-10 m-auto mt-0 bg-white border rounded-lg shadow-lg ">
          <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div class="col-span-2 ">
              <div class=" relative ">
                <label htmlFor="name" className="block mr-4 text-sm font-medium text-gray-900 leading-10">
                  Product Name
                 </label>
                <input 
                  type="text" 
                  id="name" 
                  class=" rounded-md border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                  placeholder="Product name"
                  value={product.name}
                  onChange={handleTextChange}
                  required
                />
              </div>
            </div>
            <div class="col-span-2">
              <label htmlFor="description" className="block mr-4 text-sm font-medium text-gray-900 leading-10">
                Description
              </label>
              <textarea 
                id="description"
                class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"  
                placeholder="Enter product description"  
                rows="4" cols="40"
                value={product.description}
                onChange={handleTextChange}
                required
              >
              </textarea>
            </div>
            <div class="col-span-2 lg:col-span-1">
              <div class=" relative ">
                <label htmlFor="price" className="block mr-4 text-sm font-medium text-gray-900 leading-10">
                  Price
                </label>
                <div class="relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm">
                    $
                  </span>
                </div>
                <input 
                  type="text" 
                  name="price" 
                  id="price" 
                  class="focus:ring-gray-500 border border-gray-300 py-2 px-4 focus:border-indigo-500 block w-full pl-7 pr-12 text-base rounded-md" 
                  placeholder="0.00"
                  value={product.price}
                  onChange={handleTextChange}
                  required
                />
                </div>
              </div>
            </div>
            <div class="col-span-2 lg:col-span-1">
            <div class=" relative ">
              <label htmlFor="condition" className="block mr-4 text-sm font-medium text-gray-900 leading-10">
                Condition 
              </label>
              <select 
                id="condition" 
                name="condition" 
                value={product.condition}
                onChange={(e) => handleChange(e)}  
                className="w-full py-2 px-4 rounded-md border-transparent bg-transparent border border-gray-300 text-gray-500 focus:border-gray-500 focus:ring-indigo-500 text-sm md:text-base"
                required
              >
                <option key='-1' value=''>Select condition</option>
                <option key={conditionOptions[0].id} value={conditionOptions[0].value}>{conditionOptions[0].label}</option>
                <option key={conditionOptions[1].id} value={conditionOptions[1].value}>{conditionOptions[1].label}</option>
              </select>
            </div>
            </div>
            <div class="col-span-2 lg:col-span-1">
              <div class=" relative ">
                <label htmlFor="in_stock" className="block mr-4 text-sm font-medium text-gray-900 leading-10">
                  In Stock
                </label>
                <input 
                  type="number" 
                  id="in_stock" 
                  class=" rounded-md border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                  min="0"
                  max="100"
                  step="1"
                  value={product.in_stock}
                  onChange={handleTextChange}
                  required
                />
              </div>
            </div>
            <div class="col-span-2 ">
              <div class=" relative ">
                <label htmlFor="product_tags" className="block mr-4 text-sm font-medium text-gray-900 leading-10">
                  Product tags
                </label>
                <input 
                  type="text" 
                  id="product_tags" 
                  class="rounded-md border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                  placeholder="Product tags"
                  value={product.product_tags}
                  onChange={handleTextChange}
                  required
                />
              </div>
            </div>
            <div class="col-span-2 ">
              <div class=" relative ">
                {console.log(product.category_id)}
                {console.log(categoryOptions)}
                {/* {console.log((categoryOptions[product.category_id]).value)} */}
                <label htmlFor="category_id" className="block mr-4 text-sm font-medium text-gray-900 leading-10">
                  Category
                </label>
                <select 
                  id="category_id" 
                  name="category_id" 
                  value={product.category_id}
                  onChange={(e) => handleChange(e)}
                  // defaultValue={{ value: product.category_id }}
                  className="w-full py-2 px-4 rounded-md border-transparent bg-transparent border border-gray-300 text-gray-500 focus:border-gray-500 focus:ring-indigo-500 text-sm md:text-base"
                  required
                >
                  <option key='-1' value=''>Select category</option>
                  {category.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}  
                </select>
              </div>
            </div>
            <div class="col-span-2 ">
              <div class=" relative ">
                <label htmlFor="image_url" className="block mr-4 text-sm font-medium text-gray-900 leading-10">
                  Images
                </label>
                <input 
                  type="text" 
                  id="image_url" 
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                  placeholder="image"
                  value={product.image_url}
                  onChange={handleTextChange}
                  required
                />
              </div>
            </div>
            <div class="col-span-2 text-right">
              <button 
                type="submit" 
                class="py-2 px-4 bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={(e) => handleSubmit(e)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}