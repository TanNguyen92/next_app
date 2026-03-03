"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Character } from "@/types/character";

interface FavoritesContextValue {
  favorites: Character[];
  toggleFavorite: (c: Character) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Character[]>([]);

  // Charger depuis localStorage
  useEffect(() => {
    const stored = localStorage.getItem("hp-favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  // Sauvegarder automatiquement
  useEffect(() => {
    localStorage.setItem("hp-favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(character: Character) {
    setFavorites((prev) =>
      prev.find((f) => f.id === character.id)
        ? prev.filter((f) => f.id !== character.id)
        : [...prev, character]
    );
  }

  function isFavorite(id: string) {
    return favorites.some((c) => c.id === id);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  console.log("FavoritesContext value:", ctx);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}