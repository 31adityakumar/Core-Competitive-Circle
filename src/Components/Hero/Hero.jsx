import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroMain}>
          <div className="hero-top-main">
            <h1 style={{ userSelect: "none" }}>CORE COMPETITIVE CIRCLE CLUB</h1>
            <h2 style={{ userSelect: "none" }}>Just Feel the Future</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
