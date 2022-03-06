import Banner from "components/Banner";
import Footer from "components/Footer";
import TextContent from "components/TextContent";
import SkeletonPlaceHolder from "components/SkeletonPlaceHolder";

import { ProductsProvider } from "context/ProductContext";

import "styles/App.css";
import styles from "styles/Container.module.css";

function App() {
  return (
    <div className={styles.container}>
      <ProductsProvider>
        <SkeletonPlaceHolder>
          <Banner />
          <TextContent />
          <Footer />
        </SkeletonPlaceHolder>
      </ProductsProvider>
    </div>
  );
}

export default App;
