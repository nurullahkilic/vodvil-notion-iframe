import styles from "styles/Banner.module.css";
import logo from "assets/icons/vodvil-white-logo.svg";

function Banner() {
  return (
    <div className={styles.header}>
      <div
        className={styles.backdropImage}
        style={{
          "--backdrop":
            "url(https://www.themoviedb.org/t/p/w1280/n4GJFGzsc7NinI1VeGDXIcQjtU2.jpg)",
        }}
      >
        <img
          src="https://www.themoviedb.org/t/p/w780//iYypPT4bhqXfq1b6EnmxvRt6b2Y.jpg"
          alt="Aşk Zamanı"
          className={styles.poster}
        />
        <div className={styles.productInfos}>
          <div className={styles.directorInfo}>
            <span>Wong Kar-Wai</span> 2000
          </div>
          <div className={styles.title}>Aşk Zamanı</div>
        </div>
        <a href="https://www.vodvilapp.com" target="_blank">
          <img className={styles.vodvilLogo} src={logo} alt="" />
        </a>
      </div>
      <span />
    </div>
  );
}

export default Banner;
