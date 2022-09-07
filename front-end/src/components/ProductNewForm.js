import axios from "axios";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export default function ProductNewForm() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const notify = () => {
    toast('New item created successfully.');
    setTimeout(() => {
      navigate(`/products`);
    }, 3000);
  }

  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    product_tags: "",
    category_id: "",
    image_url: "",
    in_stock: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/categories/`)
      .then((res) => {
        setCategory(res.data.payload);
      })
      .catch((error) => console.log(error));
  }, []);

  const createProduct = (product) => {
    axios
      .post(`${API}/products`, product)
      .then(() => {
        //navigate(`/products`);
        notify();
      })
      .catch((error) => console.warn("catch", error));
  };
  
  // const quantityOptions = () => {
  //   let options = [];
  //   for(let i=1; i<=10; i++) {
  //     options.push({'value':i});
  //   }
  //   //console.log(product.price)
  //   //setTotal(product.price);
  //   return options;
  // };

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
    await createProduct(product);
  };

  
  // const addToCart = async (e) => {
  //   e.preventDefault();
  //   await addItem(product, 1);
  // };

  return (
<div className="container">
  <form class=" flex w-full  space-x-3">
    <div class="w-full max-w-2xl p-10 m-auto mt-0 bg-white rounded-lg shadow ">
      <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
        <div class="col-span-2 ">
          <div class=" relative ">
          {/* <label htmlFor="category_id" className="block mr-4 text-sm font-medium text-gray-700 leading-10">Category</label> */}
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
          <label class="text-gray-700" for="name"></label>
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
            {/* <label for="price" class="block text-sm font-medium text-gray-700">
                Price
            </label> */}
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
            <input 
              type="text" 
              id="in_stock" 
              class=" rounded-md border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
              placeholder="stock"
              value={product.in_stock}
              onChange={handleTextChange}
              required
            />
          </div>
        </div>
        <div class="col-span-2 ">
          <div class=" relative ">
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
            {/* <label htmlFor="category_id" className="block mr-4 text-sm font-medium text-gray-700 leading-10">Category</label> */}
            <select 
              id="category_id" 
              name="category_id" 
              value={product.category_id}
              onChange={(e) => handleChange(e)}  
              className="w-full py-2 px-4 rounded-md border-transparent bg-transparent border border-gray-300 text-gray-500 focus:border-gray-500 focus:ring-indigo-500 sm:text-sm text-md"
              required
            >
              <option key='0' value=''>Select category</option>
              {category.map((option) => (
                <option key={option.id} value={option.id}>{option.name}</option>
              ))}  
            </select>
          </div>
        </div>
        {/* <div class="col-span-2 ">
          <div class=" relative ">
            <label class="block text-sm font-medium text-gray-700">Photo</label>
            <div class="mt-1 flex items-center">
              <span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button type="button" class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Change</button>
            </div>
          </div>
          <div class=" relative ">
            <label class="block text-sm font-medium text-gray-700">Cover photo</label>
            <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
              <div class="space-y-1 text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
          </div>
        </div>
        </div> */}
        <div class="col-span-2 ">
          <div class=" relative ">
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

//     <>
// <div>
//   <div class="md:grid md:grid-cols-3 md:gap-6">
//     <div class="md:col-span-1">
//       <div class="px-4 sm:px-0">
//         <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
//         <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
//       </div>
//     </div>
//     <div class="mt-5 md:col-span-2 md:mt-0">
//       <form >
//         <div class="shadow sm:overflow-hidden sm:rounded-md">
//           <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
//             <div class="grid grid-cols-3 gap-6">
//               <div class="col-span-3 sm:col-span-2">
//                 <label for="company-website" class="block text-sm font-medium text-gray-700">Website</label>
//                 <div class="mt-1 flex rounded-md shadow-sm">
//                   <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">http://</span>
//                   <input type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="www.example.com"/>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label for="about" class="block text-sm font-medium text-gray-700">About</label>
//               <div class="mt-1">
//                 <textarea id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com"></textarea>
//               </div>
//               <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
//             </div>

//             <div>
//               <label class="block text-sm font-medium text-gray-700">Photo</label>
//               <div class="mt-1 flex items-center">
//                 <span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
//                   <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                   </svg>
//                 </span>
//                 <button type="button" class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Change</button>
//               </div>
//             </div>

//             <div>
//               <label class="block text-sm font-medium text-gray-700">Cover photo</label>
//               <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
//                 <div class="space-y-1 text-center">
//                   <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
//                     <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                   </svg>
//                   <div class="flex text-sm text-gray-600">
//                     <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
//                       <span>Upload a file</span>
//                       <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
//                     </label>
//                     <p class="pl-1">or drag and drop</p>
//                   </div>
//                   <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
//             <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>

// <div class="hidden sm:block" aria-hidden="true">
//   <div class="py-5">
//     <div class="border-t border-gray-200"></div>
//   </div>
// </div>

// <div class="mt-10 sm:mt-0">
//   <div class="md:grid md:grid-cols-3 md:gap-6">
//     <div class="md:col-span-1">
//       <div class="px-4 sm:px-0">
//         <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
//         <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
//       </div>
//     </div>
//     <div class="mt-5 md:col-span-2 md:mt-0">
//       <form action="#" method="POST">
//         <div class="overflow-hidden shadow sm:rounded-md">
//           <div class="bg-white px-4 py-5 sm:p-6">
//             <div class="grid grid-cols-6 gap-6">
//               <div class="col-span-6 sm:col-span-3">
//                 <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
//                 <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
//               </div>

//               <div class="col-span-6 sm:col-span-3">
//                 <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
//                 <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
//               </div>

//               <div class="col-span-6 sm:col-span-4">
//                 <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
//                 <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
//               </div>

//               <div class="col-span-6 sm:col-span-3">
//                 <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
//                 <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
//                   <option>United States</option>
//                   <option>Canada</option>
//                   <option>Mexico</option>
//                 </select>
//               </div>

//               <div class="col-span-6">
//                 <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
//                 <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
//               </div>

//               <div class="col-span-6 sm:col-span-6 lg:col-span-2">
//                 {/* <label for="city" class="block text-sm font-medium text-gray-700">City</label>
//                 <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> */}
//               </div>

//               <div class="col-span-6 sm:col-span-3 lg:col-span-2">
//                 {/* <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
//                 <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> */}
//               </div>

//               <div class="col-span-6 sm:col-span-3 lg:col-span-2">
//                 {/* <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
//                 <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> */}
//               </div>
//             </div>
//           </div>
//           <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
//             <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>

// <div class="hidden sm:block" aria-hidden="true">
//   <div class="py-5">
//     <div class="border-t border-gray-200"></div>
//   </div>
// </div>

// <div class="mt-10 sm:mt-0">
//   <div class="md:grid md:grid-cols-3 md:gap-6">
//     <div class="md:col-span-1">
//       <div class="px-4 sm:px-0">
//         <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
//         <p class="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
//       </div>
//     </div>
//     <div class="mt-5 md:col-span-2 md:mt-0">
//       <form action="#" method="POST">
//         <div class="overflow-hidden shadow sm:rounded-md">
//           <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
//             <fieldset>
//               <legend class="sr-only">By Email</legend>
//               <div class="text-base font-medium text-gray-900" aria-hidden="true">By Email</div>
//               <div class="mt-4 space-y-4">
//                 <div class="flex items-start">
//                   <div class="flex h-5 items-center">
//                     <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
//                   </div>
//                   <div class="ml-3 text-sm">
//                     <label for="comments" class="font-medium text-gray-700">Comments</label>
//                     <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
//                   </div>
//                 </div>
//                 <div class="flex items-start">
//                   <div class="flex h-5 items-center">
//                     <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
//                   </div>
//                   <div class="ml-3 text-sm">
//                     <label for="candidates" class="font-medium text-gray-700">Candidates</label>
//                     <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
//                   </div>
//                 </div>
//                 <div class="flex items-start">
//                   <div class="flex h-5 items-center">
//                     <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
//                   </div>
//                   <div class="ml-3 text-sm">
//                     <label for="offers" class="font-medium text-gray-700">Offers</label>
//                     <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
//                   </div>
//                 </div>
//               </div>
//             </fieldset>
//             <fieldset>
//               <legend class="contents text-base font-medium text-gray-900">Push Notifications</legend>
//               <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
//               <div class="mt-4 space-y-4">
//                 <div class="flex items-center">
//                   <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
//                   <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">Everything</label>
//                 </div>
//                 <div class="flex items-center">
//                   <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
//                   <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700">Same as email</label>
//                 </div>
//                 <div class="flex items-center">
//                   <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
//                   <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700">No push notifications</label>
//                 </div>
//               </div>
//             </fieldset>
//           </div>
//           <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
//             <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
//     </>
  );
}