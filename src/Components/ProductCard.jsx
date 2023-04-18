import React from "react";

const ProductCard = ({ product }) => {
  const { title, description, ingredients, image, price } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-[20vw] mx-2 mb-5">
      <img className="w-full h-[20vw]" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4">
          <ul className="flex flex-wrap">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-white text-base mr-2 bg-slate-900 px-5 py-1 rounded-md mb-2">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="font-bold text-xl mt-4">${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
