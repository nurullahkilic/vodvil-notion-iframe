import { useProducts } from "context/ProductContext";
import styles from "styles/SkeletonPlaceHolder.module.css";
import logo from "assets/icons/vodvil-white-logo.svg";
import ArrowIcon from "assets/icons/ArrowIcon";

function SkeletonPlaceHolder({ children }) {
  const { isLoading } = useProducts();

  return isLoading ? (
    <>
      <div className={styles.header}>
        <div className={styles.backdropImage}>
          <div className={styles.poster} alt="" src="" />
          <div className={styles.productInfos}>
            <div className={styles.directorInfo}>
              <span></span>
            </div>
            <div className={styles.title}></div>
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
      <div className={styles.Footer}>
        <div className={styles.right}>
          <div className={styles.image}></div>
          <h5></h5>
        </div>
        <div className={styles.left}>
          <button>
            <ArrowIcon rotateDeg={90} size={14} />
          </button>
          <button>
            <ArrowIcon rotateDeg={-90} size={14} />
          </button>
        </div>
      </div>
    </>
  ) : (
    children
  );
}

export default SkeletonPlaceHolder;
