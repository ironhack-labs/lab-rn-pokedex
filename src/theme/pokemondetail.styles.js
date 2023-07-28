import { StyleSheet } from "react-native";
import theme from './theme'

export const pokemonDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textName: {
        fontSize: 32,
        color: theme.colors.white,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginVertical: 3
    },
    textNumber: {
        fontSize: 16,
        color: 'rgba(0,0,0,.6)',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    typetext: {
        color: theme.colors.white,
        textTransform: 'capitalize',
    },
    typeContainer: {
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 5,
        elevation: 3,
        shadowOffset: {
            height: 2,
            width: 2
        },
        shadowColor: 'black',
        shadowOpacity: .2
    },
    detailContainer: {
        backgroundColor: theme.colors.white,
        flex: 1,
        marginTop: -10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        padding: 10
    }
})