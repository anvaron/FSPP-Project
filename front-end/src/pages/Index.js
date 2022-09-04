import Products from "../Components/Products";

export default function Index() {
  return (
    <div className="">
      <div className="header flex items-end justify-between  p-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">
          Product list
          </p>
          <p className="text-2xl font-light text-gray-400">
            All Products listed
          </p>
        </div>
      </div>
      <Products />
    </div>
  );
}