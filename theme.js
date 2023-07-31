const theme = {
    colors: {
      whitecolor: '#fafafa',
      primary: '#007BFF',
      secondary: '#00000080',
      background: '#F1F1F1',
      text: '#000',
      grass: '#62B957',
      grassbg: '#8bbe8a',
      poison: '#A552CC',
      poisonbg: '#9f6e97',
      fire: '#FD7D24',
      firebg: '#fea756',
      flying: '#748fc9',
      flyingbg: '#9f6e97',
      water: '#4a90da',
      waterbg: '#58abf6',
      bug: '#8CB230',
      bugbg: '#8bd674',
      normal: '#9DA0AA',
      normalbg: '#b5b9c4',
      electric: '#EED535',
      electricbg: '#f2cb55',
      ground: '#DD7748',
      groundbg: '#f78551',
      fairy: '#ED6EC7',
      fairybg: '#eba8c3',
      figthg: '#cc322a',
      figthgbg: '#cc322a',
      rock: '#DD7748',
      rockbg: '#f78551', 
    },
  };

  export const getTypeBackgroundColor = (type) => {
    switch (type) {
      case 'grass':
        return theme.colors.grassbg;
      case 'poison':
        return theme.colors.poisonbg;
      case 'fire':
        return theme.colors.firebg;
      case 'flying':
        return theme.colors.flyingbg;
      case 'water':
        return theme.colors.waterbg;
      case 'bug':
        return theme.colors.bugbg;
      case 'normal':
        return theme.colors.normalbg;
      case 'electric':
        return theme.colors.electricbg;
      case 'ground':
        return theme.colors.groundbg;
      case 'fairy':
        return theme.colors.fairybg;
      case 'rock':
        return theme.colors.rock;
      case 'fighting':
        return theme.colors.rock;
      default:
        return theme.colors.background;
    }
  };

  export const getTypeColor = (type) => {
    switch (type) {
      case 'grass':
        return theme.colors.grass;
      case 'poison':
        return theme.colors.poison;
      case 'fire':
        return theme.colors.fire;
      case 'flying':
        return theme.colors.flying;
      case 'water':
        return theme.colors.water;
      case 'bug':
        return theme.colors.bug;
      case 'normal':
        return theme.colors.normal;
      case 'electric':
        return theme.colors.electric;
      case 'ground':
        return theme.colors.ground;
      case 'fairy':
        return theme.colors.fairy;
      case 'rock':
        return theme.colors.rockbg;
      case 'fighting':
        return theme.colors.rockbg;
      default:
        return theme.colors.background;
    }
  };
  
  export default theme;
  