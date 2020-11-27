export const getCharacters = async (page) => {
  const response = await window.fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  return await response.json();
};
