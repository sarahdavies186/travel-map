import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return <Link to="/"><div className={styles.logo} >Travel Diary</div></Link>;
}

export default Logo;
