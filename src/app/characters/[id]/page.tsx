'use client'
import { getCharacterById } from "../../../services/API";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Character as CharacterData } from "@/types/character";

export default function Character() {
  const params = useParams();
  const [character, setCharacter] = useState<CharacterData | null>(null);
  useEffect(() => {
    const fetchCharacter = async () => {
      if (typeof params.id === 'string') {
        const data : CharacterData = await getCharacterById(params.id);
        setCharacter(data);
      }
    };
    fetchCharacter();
  }, [params.id]);

  console.log(character);

  return (
    <div>
      <h1>Character :</h1>
        <p>Name: {character?.name}</p>
        <p>House: {character?.house}</p>
        <p>Species: {character?.species}</p>
        <p>Gender: {character?.gender}</p>
        <p>date Of Birth: {character?.dateOfBirth}</p>
        <p>Patronus: {character?.patronus}</p>
        <p>Actor: {character?.actor}</p>
    </div>
  );
}
