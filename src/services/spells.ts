export type Spell = {
  id: string;
  name: string;
  description: string;
};

export async function getSpells(): Promise<Spell[]> {
  const res = await fetch("https://hp-api.onrender.com/api/spells", {
    next: { revalidate: 60 } // ISR : revalider toutes les 60s
    // pour toujours frais -> cache: 'no-store'
  });
  if (!res.ok) throw new Error("Failed to fetch spells");
  return res.json();
}
