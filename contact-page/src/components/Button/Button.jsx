import styles from './Button.module.css'
import { MdMessage } from "react-icons/md";

const Button = () => {
  return (
    <button className={styles.primary_btn}>
        <MdMessage />
        VIA SUPPORT CHAT
    </button>
  );
};

export default Button;