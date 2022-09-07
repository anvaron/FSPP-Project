import ProductEditForm from "../components/ProductEditForm";
import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  //console.log('data', id)
  
  return (
    <div className="h-full block">
      <div className="header p-12">
        <div className="title">
          <p className="justify-center items-center text-center text-4xl font-bold text-gray-800 mb-4">
          Edit 
          </p>
        </div>
      </div>
      <ProductEditForm />
    </div>
  );
}