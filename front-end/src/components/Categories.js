import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate, useSearchParams } from "react-router-dom";
import Category from "./Category";

const API = process.env.REACT_APP_API_URL;

export default function Categories( props ) {
  const [categories, setCategories] = useState([]);
  
  const getData = async () => {
  
    await axios
      .get(`${API}/categories`)
      .then(({ data }) => setCategories(data.payload))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full bg-teal-100">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 grid-flow-row p-10 gap-10">
        {categories.map((category) => {
          return <Category key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
}