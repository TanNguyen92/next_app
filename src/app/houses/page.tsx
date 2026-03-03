import Flag from "@/components/flags/Flag";
import styles from "@/components/flags/Flag.module.css";
import Link from "next/link";

export default function Houses() {
  const house: string[] = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
  return (
    <div>
      <div className={styles.flagsWrapper}>
        {house.map((h, i) => (
          <Link key={i} href={`/houses/${h.toLowerCase()}`} className={styles.flagLink}>
            <Flag key={i} house={h} />
          </Link>
        ))}
      </div>
    </div>
  );
}
