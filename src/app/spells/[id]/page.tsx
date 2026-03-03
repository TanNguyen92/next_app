
interface SpellProps {
  params: {
    id: string;
  };
}

export default function Spell({ params }: SpellProps) {
  return (
    <div>
      <h1>Spell : {params.id}</h1>
    </div>
  );
}
