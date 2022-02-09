import styles from "styles/TextContent.module.css";

import { useProducts } from "context/ProductContext";

function TextContent() {
  const { currentProduct } = useProducts();
  return (
    <>
      <div className={styles.hackBox}></div>
      <div className={styles.textContent}>
        <p>
          {currentProduct?.notion?.content}
          <a
            className={styles.link}
            href="https://www.vodvilapp.com/@nurullah"
            target="_blank"
          >
            Siteye git
          </a>
        </p>
      </div>
    </>
  );
}

export default TextContent;
