import Products from "../components/Products";
import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";


export default function Index() {

  const { id } = useParams();
  //console.log('data', id)

  return (
    <div className="">
      <div className="header flex items-end justify-between py-5 bg-gray-100">
        <div className="w-full title text-center">
          <p className="mb-4 text-2xl font-extrabold text-gray-900">
            
          </p>
          <p className="text-2xl font-bold text-gray-600">
             
          </p>
        </div>
      </div>
      <Products category={id}/>
    </div>
  );
}