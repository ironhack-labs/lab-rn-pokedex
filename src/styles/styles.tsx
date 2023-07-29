import {StyleSheet} from 'react-native';
import theme from './themes';

export default StyleSheet.create({

  text: {
    color: theme.colors.text,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center', // Centramos el texto horizontalmente
  },
  input: {
    width: '100%',
    height: 50, // Aumentamos el tamaño del input
    borderWidth: 2, // Hacemos el borde más grueso
    borderColor: theme.colors.primary, // Utilizamos un color más llamativo para el borde
    borderRadius: 10, // Hacemos las esquinas más redondeadas
    paddingHorizontal: 12, // Aumentamos el espacio horizontal interno
    marginBottom: 24, // Aumentamos el espacio entre inputs y otros elementos
    fontSize: 16, // Aumentamos el tamaño del texto dentro del input
    color: theme.colors.text, // Cambiamos el color del texto del input
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24, // Aumentamos el espacio horizontal interno del botón
    borderRadius: 12, // Hacemos las esquinas más redondeadas
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // Agregamos sombra al botón
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Agregamos elevación en Android para simular sombra
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold', // Hacemos el texto en negrita
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  image: {
    width: 250, // Aumentamos el tamaño de la imagen
    height: 250, // Aumentamos el tamaño de la imagen
    marginBottom: 16,
    borderRadius: 10, // Hacemos las esquinas más redondeadas
    resizeMode: 'cover', // Ajustamos la imagen para que cubra todo el espacio sin deformarla
  },
  pokeball: {
    position: 'absolute',
    top: -50,
    left: 100,
    transform: [{ rotate: '50deg'}]
  },
});
