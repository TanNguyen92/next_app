import { useFavorites } from "@/context/FavoritesContext";
import styles from "./FavoriteButton.module.css";
import { Character } from "@/types/character";


export function FavoriteButton({ character }: { character: Character }) {
      const { toggleFavorite, isFavorite } = useFavorites();

    return (
        <button
            onClick={() => toggleFavorite(character)}
            aria-label={isFavorite(character.id) ? "Retirer des favoris" : "Ajouter aux favoris"}
            className={styles.favoriteButton}
        >
            {isFavorite(character.id) ? "❤️" : "🤍"}
        </button>
    );
}

