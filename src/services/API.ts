export type Spell = {
  id: string;
  name: string;
  description: string;
};

type Character = {
  image: any;
  id: string;
  name: string;
  house: string;
};

const API_BASE_URL = process.env.HP_PUBLIC_API_URL || "https://hp-api.onrender.com/api";

export async function getSpells(): Promise<Spell[]> {
  const res = await fetch(`${API_BASE_URL}/spells`, {
    next: { revalidate: 60 }, // ISR : revalider toutes les 60s
    cache: "no-store",// pour toujours frais -> cache: 'no-store'
  });
  if (!res.ok) throw new Error("Failed to fetch spells");
  return res.json();
}

export async function getCharacters(): Promise<Character[]> {
  const res = await fetch(`${API_BASE_URL}/characters`, {
    next: { revalidate: 60 },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch characters");
  return res.json();
}

export async function getCharacterById(id: string): Promise<Character> {
  const res = await fetch(`${API_BASE_URL}/character/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch character");
  const data = await res.json();
  // Si data est un tableau, retourne le premier élément, sinon retourne l'objet
  return Array.isArray(data) ? data[0] : data;
}