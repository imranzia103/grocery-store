import React from "react";
import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/AppContext";
const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className=" mt-16">
      <p className=" text-2xl md:text-3xl font-medium">Best Seller</p>

      <div
        className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  md:gap-6
      lg:grid-cols-5 gap-3 mt-4"
      >
        {products
          .filter((products) => products.inStock)
          .slice(0, 5)
          .map((products, index) => (
            <ProductCard key={index} products={products} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
