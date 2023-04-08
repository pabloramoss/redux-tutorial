import {API} from "../constants/endpoints";

export const getCharacters = async () => {
  try {
    const response = await fetch(API.characters);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Hubo un error al traerse los datos", error);
  }
};
