import axios from "axios";

export async function gecCharacter(){
    const character = await axios.get('https://rickandmortyapi.com/api/character/2');
}