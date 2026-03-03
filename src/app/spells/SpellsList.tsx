import { getSpells } from "../../services/API";
import styles from "./SpellsList.module.css";
import Link from "next/link";

export default async function SpellsList() {
  const spells = await getSpells();
  if (!spells || spells.length === 0) {
    return <div className={styles.emptyState}>Aucun sort trouvé.</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {spells.map((s, i) => (
          <Link key={s.name ?? i} href={`/spell/${s.id}`} className={styles.card}>
            <h3 className={styles.cardTitle}>{s.name}</h3>

            <div className={styles.cardDescription}>
              <p>{s.description ?? "—"}</p>
            </div>

            <div className={styles.cardFooter}>&nbsp;</div>
          </Link>
        ))}
      </div>
    </div>
  );
}