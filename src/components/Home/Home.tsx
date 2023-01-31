import {useEffect, useState} from "react";

const getCharacters = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    console.log(data);

    return data.results;
  } catch (error) {
    console.log("Hubo un error al traerse los datos", error);
  }
};

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<any>([]);

  useEffect(() => {
    getCharacters().then((characters) => setCharacters(characters));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {characters.map((character: any) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
