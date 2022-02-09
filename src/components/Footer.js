import styles from "styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.right}>
        <img
          src="https://www.vodvilapp.com/static/uploads/1_profile.jpg"
          alt=""
        />
        <h5>
          Nurullah Kılıç<span> · az önce</span>
        </h5>
      </div>
      <div className={styles.left}>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}

export default Footer;
