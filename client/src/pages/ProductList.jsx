import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../redux/slices/productSlice';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error, page, pages } = useSelector((state) => state.products);
  
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts({ keyword, pageNumber: currentPage }));
  }, [dispatch, keyword, currentPage]);

  const searchHandler = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getProducts({ keyword, pageNumber: 1 }));
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      
      {/* Search Box */}
      <form onSubmit={searchHandler} className="mb-8">
        <div className="flex">
          <input
            type="text"
            placeholder="Search products..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="form-input flex-1 mr-2"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="alert alert-error">{error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {pages > 1 && (
            <div className="flex justify-center space-x-2">
              {[...Array(pages).keys()].map((x) => (
                <button
                  key={x + 1}
                  onClick={() => setCurrentPage(x + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === x + 1
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {x + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;