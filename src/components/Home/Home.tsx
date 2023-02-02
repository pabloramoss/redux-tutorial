import {useEffect, useState} from "react";

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
