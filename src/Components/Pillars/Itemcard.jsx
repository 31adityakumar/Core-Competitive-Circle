import styles from "./ItemCard.module.scss";
import PropTypes from "prop-types";

const ItemCard = (props) => {
  return (
    <div className={styles.Item}>
      <div className={styles.rectangle}>
        <p className={styles.description_pillars}>&quot;{props.desc}&quot;</p>
      </div>
      <div className={styles.ellipse}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.name_conatiner}>
        <span className={styles.name_pillars}>{props.name}</span>
        <span className={styles.designation_pillars}>{props.designation}.</span>
      </div>
    </div>
  );
};

export default ItemCard;

ItemCard.propTypes = {
  desc: PropTypes.string,
  name: PropTypes.string,
  designation: PropTypes.string,
  img: PropTypes.string,
};
