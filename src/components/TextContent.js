import styles from "styles/TextContent.module.css";

import { useProducts } from "context/ProductContext";

function TextContent() {
  const { currentProduct } = useProducts();

  return (
    <>
      <div className={styles.hackBox}></div>
      <div className={styles.textContent}>
        <p>
          {currentProduct?.notion?.content
            .replace(/\n/g, "")
            .replace(/\[--spoiler--\](.*?)\[--spoiler--\]/gm, "")}
          <a
            className={styles.link}
            href="https://www.vodvilapp.com/@nurullah"
            target="_blank"
            rel="noreferrer"
          >
            Siteye git
          </a>
        </p>
      </div>
    </>
  );
}

export default TextContent;
