import {ENDPOINTS} from "../constants/endpoints";

export const getCharacters = async () => {
  try {
    const response = await fetch(ENDPOINTS.characters);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log("Hubo un error al traerse los datos", error);
  }
};
