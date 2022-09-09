import { useState } from 'react'

export default function Category({ category, handleClick }) {

  return (
    <div class="w-full h-90 overflow-hidden shadow-lg rounded-lg cursor-pointer m-auto bg-white relative">
      <div class="bg-white w-full p-4">
        <p class="text-center text-teal-600 text-2xl font-bold mb-2">
          {category.name}
        </p>
        <p class="text-center text-gray-600 text-md font-semi mb-0">
          {category.description}
        </p>
      </div>
      <div class="w-full relative">
        <img 
          src={category.image} 
          alt={category.name}
          class="w-full mx-auto my-0"
        />
      </div>
      <div class="w-full absolute bottom-4 z-20">
        <div class="text-center">
        <button
          onClick={() => handleClick(category.id)}
          type="button" 
          className="w-6/12  py-2 px-4 bg-teal-500 hover:bg-teal-800 focus:ring-teal-500 focus:ring-offset-teal-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
        >
          View Products
        </button>
      </div>
      </div>
    </div>
  );
}