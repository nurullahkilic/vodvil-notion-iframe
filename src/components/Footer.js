import styles from "styles/Footer.module.css";
import ArrowIcon from "assets/icons/ArrowIcon";

import { useProducts } from "context/ProductContext";

function Footer() {
  const { products, currentProduct, setCurrentProduct } = useProducts();

  const prevProduct = () => {
    let index = products.findIndex((product) => {
      return product.notion.id === currentProduct.notion.id;
    });
    if (index === 0) index = products.length;
    setCurrentProduct(products[index - 1]);
  };

  const nextProduct = () => {
    let index = products.findIndex((product) => {
      return product.notion.id === currentProduct.notion.id;
    });
    if (products.length <= index + 1) index = -1;
    setCurrentProduct(products[index + 1]);
  };

  return (
    <div className={styles.Footer}>
      <div
        className={styles.right}
        onClick={() =>
          window.open(
            `https://www.vodvilapp.com/@${currentProduct?.user?.username}`,
            "_blank"
          )
        }
      >
        <img
          src={currentProduct?.user?.image}
          alt={currentProduct?.user?.username}
        />
        <h5>
          {currentProduct?.user?.fullname}
          <span> · {currentProduct?.notion?.time_ago}</span>
        </h5>
      </div>
      <div className={styles.left}>
        <button onClick={prevProduct}>
          <ArrowIcon rotateDeg={90} size={14} />
        </button>
        <button onClick={nextProduct}>
          <ArrowIcon rotateDeg={-90} size={14} />
        </button>
      </div>
    </div>
  );
}

export default Footer;
