import styles from "./Flag.module.css";

export default function Flag({ house }: { house: string }) {
  return (
    <div className={styles.flagContainer}>
      <img src={`/${house.toLowerCase()}_flag.png`} className={styles.flag} alt="drapeau" />
    </div>
  );
}