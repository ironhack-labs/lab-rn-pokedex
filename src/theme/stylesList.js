// theme/stylesList.js

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 8,
  },
  listContent: {
    justifyContent: 'center', // Centra las cards en la lista horizontalmente
    flexDirection: 'row', // Mostrar las cards en una fila
    flexWrap: 'wrap', // Permite que las cards se ajusten a la siguiente línea
    justifyContent: 'space-between', // Espacio uniforme entre las cards
  },
  pokemonCard: {
    width: '48%', // El 48% del ancho de la pantalla para mostrar dos columnas
    marginBottom: 16,
  },
});
