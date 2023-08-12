import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroMain}>
          <h1 style={{ userSelect: "none" }}>CORE COMPETITIVE CIRCLE CLUB</h1>
          <h2 style={{ userSelect: "none" }}>
            Society of Mechanical and Civil Department
          </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
