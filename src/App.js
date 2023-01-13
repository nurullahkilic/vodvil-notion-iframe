import { useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";

import Banner from "components/Banner";
import Footer from "components/Footer";
import TextContent from "components/TextContent";
import SkeletonPlaceHolder from "components/SkeletonPlaceHolder";

import { useProducts } from "context/ProductContext";

import "styles/App.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

function App() {
  const { setProducts, setCurrentProduct, setIsLoading } = useProducts();

  useEffect(() => {
    axios("https://nurullahkilic.pythonanywhere.com/api/embed")
      .then((data) => {
        setProducts(data?.data);
        setCurrentProduct(data?.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(true);
      });
  }, [setProducts, setCurrentProduct, setIsLoading]);

  return (
    <Container>
      <SkeletonPlaceHolder>
        <Banner />
        <TextContent />
        <Footer />
      </SkeletonPlaceHolder>
    </Container>
  );
}

export default App;
