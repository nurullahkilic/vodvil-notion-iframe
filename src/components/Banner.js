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
          "--backdrop": `url(https://www.themoviedb.org/t/p/w1280${currentProduct?.product?.backdrop_path})`,
        }}
      >
        <img
          src={`https://www.themoviedb.org/t/p/w780${currentProduct?.product?.poster_path}`}
          alt={currentProduct?.product?.title}
          className={styles.poster}
          onClick={() =>
            window.open(
              `https://www.vodvilapp.com/${currentProduct?.product?.type}/${currentProduct?.product?.id}`,
              "_blank"
            )
          }
          title={`${currentProduct?.product?.title} · Vodvil'de gör.`}
        />
        <div className={styles.productInfos}>
          <div className={styles.directorInfo}>
            <span>{currentProduct?.product?.director}</span>{" "}
            {currentProduct?.product?.release_date}
          </div>
          <div className={styles.title}>
            {currentProduct?.product?.title.length > 35
              ? currentProduct?.product?.title.slice(0, 35) + "..."
              : currentProduct?.product?.title}
          </div>
          <Rate
            className={styles.star}
            initialRating={parseInt(currentProduct?.product?.rate) / 2}
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
