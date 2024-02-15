import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>total users</span>
        <span className={styles.number}></span>
        <span className={styles.detail}>
        </span>
      </div>
    </div>
  );
};

export default Card;
