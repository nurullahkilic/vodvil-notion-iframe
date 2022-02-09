import styles from "styles/Banner.module.css";
import logo from "assets/icons/vodvil-white-logo.svg";

import Rate from "components/Rate";

import { useProducts } from "context/ProductContext";

function Banner() {
  const { currentProduct } = useProducts();

  return (
    <div className={styles.header}>
      <div
        className={styles.backdropImage}
        style={{
          "--backdrop": `url(${currentProduct?.product?.backdrop_path})`,
        }}
      >
        <img
          src={currentProduct?.product?.poster_path}
          alt={currentProduct?.product?.title}
          className={styles.poster}
          onClick={() => window.open("https://www.vodvilapp.com", "_blank")}
          title={`${currentProduct?.product?.title} · Vodvil'de gör.`}
        />
        <div className={styles.productInfos}>
          <div id="rateYo"></div>
          <div className={styles.directorInfo}>
            <span>{currentProduct?.product?.director}</span>{" "}
            {currentProduct?.product?.release_date}
          </div>
          <div className={styles.title}>{currentProduct?.product?.title}</div>
          <Rate
            className={styles.star}
            initialRating={currentProduct?.product?.rate}
          />
        </div>
        <a
          href="https://www.vodvilapp.com"
          target="_blank"
          rel="noreferrer"
          title="Vodvil'e git."
        >
          <img className={styles.vodvilLogo} src={logo} alt="" />
        </a>
      </div>
      <span />
    </div>
  );
}

export default Banner;
