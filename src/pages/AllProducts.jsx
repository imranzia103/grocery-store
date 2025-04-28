import { useEffect, useState } from "react";
import React from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0 ) {
      // Filter products based on search query
      setFilteredProducts(products.filter(
        products => products.name.toLowerCase().includes(searchQuery.
          toLowerCase())
        )
      )
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className=" text-2xl font-medium uppercase">All Products</p>

        <div className=" w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      <div  className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap 3 
      md:gap-6 lg:grid-col-5 mt-6">
            
            {products
          .filter((products) => products.inStock)
          
          .map((products, index) => (
            <ProductCard key={index} products={products} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
                                                                                                                                                                                                                                                                                                                                    