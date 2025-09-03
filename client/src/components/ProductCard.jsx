import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card product-card">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-indigo-600">
            {product.name}
          </h3>
        </Link>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">{product.category}</span>
          <span className="text-indigo-600 font-bold">${product.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <button className="btn btn-primary w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;