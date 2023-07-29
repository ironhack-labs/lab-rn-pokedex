
const getPokemonId = (url: string): number => {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);
  };
  
  export default getPokemonId;
  