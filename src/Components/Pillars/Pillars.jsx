import { useRef } from "react";
import ItemCard from "./ItemCard";
import styles from "./Pillars.module.scss";
import Dilip from "/images/Dilip.png";

const Pillars = () => {
  let cardHolder = useRef();

  function handleNext() {
    cardHolder.current.scrollLeft += cardHolder.current.offsetWidth;
  }

  function handlePrev() {
    cardHolder.current.scrollLeft -= cardHolder.current.offsetWidth;
  }

  let info = [
    {
      id: "1",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur neque id laboriosam. Neque ipsum, quasi iusto minima est optio beatae ducimus nobis suscipit aspernatur qui eius in debitis nisi aliquam.",
      name: "Prof. Dilip Kumar Baidya",
      designation: "Director, NIT Sichar",
      img: Dilip,
    },
    {
      id: "2",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur neque id laboriosam. Neque ipsum, quasi iusto minima est optio beatae ducimus nobis suscipit aspernatur qui eius in debitis nisi aliquam.",
      name: "Prof. Dilip Kumar Baidya",
      designation: "Director, NIT Sichar",
      img: Dilip,
    },
    {
      id: "3",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur neque id laboriosam. Neque ipsum, quasi iusto minima est optio beatae ducimus nobis suscipit aspernatur qui eius in debitis nisi aliquam.",
      name: "Prof. Dilip Kumar Baidya",
      designation: "Director, NIT Sichar",
      img: Dilip,
    },
  ];

  return (
    <div className={styles.Pillar_of_Ecell}>
      <div className={styles.container}>
        <h1 className={styles.header}>PILLARS OF THE CLUB</h1>
      </div>

      <div className={styles.Card_holder} ref={cardHolder}>
        {info.map((element) => {
          return (
            <ItemCard
              key={element.id}
              id={element.id}
              desc={element.desc}
              name={element.name}
              designation={element.designation}
              img={element.img}
            />
          );
        })}
      </div>
      <div className={`${styles.btns} ${styles.btns0}`}>
        <button className={styles.prev} onClick={handlePrev}>
          <i className={`${styles.arrow} ${styles.left}`} />
        </button>
        <button className={styles.next} onClick={handleNext}>
          <i className={`${styles.arrow} ${styles.right}`} />
        </button>
      </div>
    </div>
  );
};

export default Pillars;
