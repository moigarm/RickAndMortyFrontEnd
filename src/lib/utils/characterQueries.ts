// Example of query in character: https://rickandmortyapi.com/api/character/?name=rick&status=alive

export const GetCharacters = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json();
  return data;
}