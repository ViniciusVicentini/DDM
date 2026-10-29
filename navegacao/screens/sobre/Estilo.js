
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
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
        marginBottom: 20,
        color: '#555555',
    },
    botao: {
        marginTop: 12,
        borderRadius: 8,
        overflow: 'hidden',
    },
});

export default styles;
