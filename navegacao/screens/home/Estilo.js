
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
        backgroundColor: '#f5f5f5',
    },

    titulo: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#007AFF',
    },

    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
        color: '#333333',
    },

    texto: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 25,
        color: '#555555',
    },

    botao: {
        marginTop: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },

});

export default styles;
