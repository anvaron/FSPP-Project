import Products from "../components/Products";
import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";
import NavCategories from "../components/NavCategories";

export default function Index() {

  const { id } = useParams();
  console.log(useParams())
  return (
    <div className="">
      <NavCategories />
      <div className="header w-full items-end justify-between p-12">
        <div className="container hidden md:block">
          <nav class="flex " aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                  <Link
                    to="/" 
                    class="text-gray-700 hover:text-gray-900 inline-flex items-center"
                  >
                    <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Home
                  </Link>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span class="text-gray-400 ml-1 md:ml-2 text-md font-medium">
                      Products
                    </span>
                  </div>
                </li>
              </ol>
          </nav>
        </div>
        <div className="w-full title text-center">
          <p className="mb-4 text-2xl font-extrabold text-gray-900">
            
          </p>
          <p className="text-2xl font-bold text-gray-600">
             
          </p>
        </div>
      </div>
      <Products categoryId={id}/>
    </div>
  );
}