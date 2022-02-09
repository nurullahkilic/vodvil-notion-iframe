import styles from "styles/TextContent.module.css";

function TextContent() {
  return (
    <>
      <div className={styles.hackBox}></div>
      <div className={styles.textContent}>
        <p>
          Romantizm ve aşkı orijinal bir anlatıyla birleştiren film, izleyiciyi
          1962 yılının Hong Kong’una götürür ve birbirlerine deliler gibi aşık
          olan, tutkuyla bağlanan Mrs. Chan ve Mr. Chow’un hikâyesine odaklanır.
          Her ikisinin de eşleri onları aldatmaktadır. Mrs. Chan ve Mr. Chow ise
          eşleri gibi evliliklerine sadakatsizlik yapmama konusunda fikir
          birliğine varmıştır. Fakat ikilinin arasındaki arkadaşlık, karşı
          konulması pek mümkün olmayan çekim gücünün de etkisiyle başka bir
          boyuta geçer. Birbirlerinin tenlerine dokunmadan geçen zaman
          içerisinde ikilinin arasındaki çekim gücü daha da büyür. Beyazperdeye
          aktarılan en acıklı, en gerçek aşk hikâyelerinden biri olan film,
          şiirsel anlatısının yanında izleyiciyi romantizm doruklarına götürür.
          Evlilik kurumunun sarsılmaması için hayatı devam ettirmek zorunda olan
          karakterler, aşkın çekim gücüne kendilerini kaptırırlar. Renk
          paletinden, unutulmaz müziklerine; başarılı oyuncu performanslarından,
          sanat ve görüntü yönetimine kadar her şeyiyle bir ustalık eseridir.{" "}
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
