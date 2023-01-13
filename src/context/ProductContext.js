import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";
import { data } from "assets/dummy";

const ProductsContext = createContext();
const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://nurullahkilic.pythonanywhere.com/api/embed")
      .then((data) => {
        setProducts(data.data);
        setCurrentProduct(data.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setProducts(data);
        setCurrentProduct(data[0]);
        setIsLoading(false);
      })
      .finally(() => {
        // setIsLoading(false);
        // Show error screen
      });
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
