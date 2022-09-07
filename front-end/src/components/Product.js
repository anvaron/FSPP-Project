import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import heartRegular from "../assets/heart-regular.png";
// import heartSolid from "../assets/heart-solid.png";

export default function Product({ product }) {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  }

  return (
    <div class="w-full h-90 overflow-hidden shadow-lg rounded-lg cursor-pointer m-auto bg-white">
      
      <Link
        to={`/products/${product.id}`}
        className="mr-5 text-white hover:text-gray-200 text-xl font-bold"
      >
      <div class="w-full relative">
        <img 
          src={product.image_url} 
          alt={product.name}
          class="w-full mx-auto my-0"
        />
        <p className="absolute top-5 right-4">
          {product.in_stock 
            ?
            <span className="p-2 bg-teal-600 text-white text-md font-bold rounded-sm">In Stock</span>
            // (<img className="max-h-40 w-full object-cover" src={heartSolid} alt="healthy food" />) 
            : 
            <span className="p-2 bg-red-400 text-white text-md font-bold rounded-sm">Out of Stock</span>
            // (<img className="max-h-40 w-full object-cover" src={heartRegular} alt="unhealthy food" />)
          } 
        </p>
      </div>
        <div class="bg-white w-full p-4">
          
          <p class="text-teal-600 text-sm font-bold">
            <span>{product.category}</span>
          </p>
          <p class="text-gray-400 text-xl font-bold mb-0">
            {product.name}
          </p>
          <p class="text-gray-900 text-3xl font-bold mb-2">
            ${product.price} 
          </p>
          <p class="text-gray-400 font-light text-xs">
          {(product.product_tags) 
          ?
          <span class="px-4 py-1  text-base rounded-full text-white bg-blue-800 ">
            {product.product_tags}
          </span>
          : null
          }
          </p>
        </div>
        </Link>
      {/* </a> */}
      {/* <div className="w-full mt-0 justify-center items-center text-center">
        <button 
          onClick={() => handleClick()}
          type="button" 
          className="py-4 px-4 bg-gray-800 hover:bg-gray-900 focus:ring-gray-800 focus:ring-offset-gray-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm ">
          View details 
        </button>
      </div> */}
    </div>
    // <div className="w-full 
                    
    //                 px-0 
    //                 py-0 
    //                 bg-white 
    //                 mt-6 mb-6 
    //                 shadow-lg 
    //                 rounded-lg
    //                 relative
    //                 ">
      
    //   <div className="top-10 ">
    //     <img className="max-h-40 w-full object-cover" src={product.image_url} alt={product.name} />
    //     <div className="flex-shrink-0 ">
    //       <div className=" flex 
    //                       items-center 
    //                       mx-auto justify-center 
                          
    //                       p-2"
    //         >
    //         {product.in_stock 
    //           ?
    //           <span>In Stock</span>
    //           // (<img className="max-h-40 w-full object-cover" src={heartSolid} alt="healthy food" />) 
    //           : 
    //           <span>Out of Stock</span>
    //           // (<img className="max-h-40 w-full object-cover" src={heartRegular} alt="unhealthy food" />)
    //         }
    //         </div>
    //     </div>
    //   </div>
    //   <h2 className="h-20 p-4 text-2xl sm:text-xl text-gray-700 font-semibold text-center">
    //     {product.name}
    //   </h2>
    //   <div className="w-full mt-6 justify-center items-center text-center">
    //     <button 
    //       onClick={() => handleClick()}
    //       type="button" 
    //       className="w-3/4 py-4 px-4 bg-gray-800 hover:bg-gray-900 focus:ring-gray-800 focus:ring-offset-gray-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm ">
    //       View Product 
    //     </button>
    //   </div>
    // </div>
  );
}