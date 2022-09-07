import ProductNewForm from "../components/ProductNewForm";

export default function New() {
  return (
    <div className="container mx-auto block ">
      <div className="header p-12">
        <div className="title text-center">
          <h2 className="text-5xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block text-gray-500 text-4xl m-0 mb-2">
              Create Product
            </span>
            <span className="block text-2xl font-bold text-gray-600">
              Start selling or trading by creating a new entry.
            </span>
          </h2>
          {/* <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            The world's most advanced platform.
          </p>   */}
        </div>
      </div>
        <ProductNewForm />
    </div>
  );
}