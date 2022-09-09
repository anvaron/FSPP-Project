import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
            {(product.in_stock >= 1) 
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
          <span class="px-4 py-1 text-sm font-bold rounded-full text-white bg-blue-800 ">
            {product.product_tags}
          </span>
          : null
          }
          </p>
        </div>
      </Link>
    </div>
  );
}