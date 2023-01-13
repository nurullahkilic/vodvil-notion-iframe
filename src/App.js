import {useEffect} from "react";
import axios from "axios"

import Banner from "components/Banner";
import Footer from "components/Footer";
import TextContent from "components/TextContent";
import SkeletonPlaceHolder from "components/SkeletonPlaceHolder";

import { useProducts } from "context/ProductContext";


import "styles/App.css";
import styles from "styles/Container.module.css";

function App() {
  const {setProducts, setCurrentProduct, setIsLoading} = useProducts();

  useEffect(() => {
    axios("https://nurullahkilic.pythonanywhere.com/api/embed")
      .then((data) => {
        setProducts(data?.data);
        setCurrentProduct(data?.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(true);
      })
  },[setProducts,setCurrentProduct,setIsLoading]);

  return (
    <div className={styles.container}>
        <SkeletonPlaceHolder>
          <Banner />
          <TextContent />
          <Footer />
        </SkeletonPlaceHolder>
    </div>
  );
}

export default App;
