'use client';
import { useEffect, useState } from 'react';
import { Suspense } from "react";
import { getCharacters } from "@/services/API";
import styles from "./Characters.module.css";
import Link from "next/link";
import { houseColor } from "@/lib/colors";
import { Character } from "@/types/character";
import { FavoriteButton } from '@/components/favorites/FavoriteButton';

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data);
    }
    fetchCharacters();
  }, []);

  if (!characters || characters.length === 0) {
    return <div>Aucun personnage trouvé.</div>;
  }

  const test = characters.map(c => c.name);
  console.log(test);

  const test2 = characters.map(c => c.house);
  console.log(test2);
  
  return (
    <div>
      <Suspense fallback={<div>Chargement…</div>}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {characters.map((c, i) => {
              const color = houseColor(c.house);
              const bg = `linear-gradient(180deg, ${color} 0%, ${color} 33%, #ffffff 33%, #ffffff 100%)`;
              return (
                <div key={c.name ?? i} style={{ position: "relative" }}>
                  <Link
                    href={`/characters/${c.id}`}
                    className={styles.card}
                    style={{ backgroundImage: bg }}
                  >
                    {c?.image ? (
                      <img src={c.image} alt={c.name} className={styles.cardImage} />
                    ) : (
                      <div>Image introuvable</div>
                    )}
                    <h3 className={styles.cardTitle}>{c.name}</h3>
                    <div className={styles.cardFooter}>&nbsp;</div>
                  </Link>
                  <FavoriteButton character={c} />
                </div>
              );
            })}
          </div>
        </div>
      </Suspense>
    </div>
  );
}