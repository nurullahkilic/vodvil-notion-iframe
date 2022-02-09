import { createContext, useContext, useEffect, useState } from "react";

import Products from "assets/dummy.json";

const ProductsContext = createContext();
const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(Products);
      setCurrentProduct(Products[0]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const values = {
    currentProduct,
    setCurrentProduct,
    products,
    setProducts,
    isLoading,
  };

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export { useProducts, ProductsProvider };
