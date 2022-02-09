import "styles/App.css";
import styles from "styles/Container.module.css";

import Banner from "components/Banner";
import Footer from "components/Footer";
import TextContent from "components/TextContent";

function App() {
  return (
    <div className={styles.container}>
      <Banner />
      <TextContent />
      <Footer />
    </div>
  );
}

export default App;
