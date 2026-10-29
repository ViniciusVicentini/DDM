
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
        marginBottom: 10,
        color: '#007AFF',
    },
    subtitulo: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#555555',
    },
    destino: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#dddddd',
    },
    nomeDestino: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#333333',
    },
    descricao: {
        fontSize: 14,
        lineHeight: 20,
        color: '#555555',
    },
    botao: {
        marginTop: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
});

export default styles;
