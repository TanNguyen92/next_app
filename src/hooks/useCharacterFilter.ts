import { useMemo } from "react";
import { Character } from "@/types/character";

export function useCharacterFilter(characters: Character[], house: string) {
  return useMemo(() => {
    if (!house) return characters;
    return characters.filter((c) => c.house === house);
  }, [characters, house]);
}