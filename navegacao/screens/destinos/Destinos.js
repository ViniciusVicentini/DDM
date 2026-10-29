
import { View, Text, Button } from 'react-native';

import styles from './Estilo';

export default function Destinos({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Nossos Destinos
            </Text>

            <Text style={styles.subtitulo}>
                Escolha seu próximo lugar para explorar!
            </Text>

            <View style={styles.destino}>
                <Text style={styles.nomeDestino}>
                    Paris, França 🇫🇷
                </Text>
                <Text style={styles.descricao}>
                    Conheça a Torre Eiffel e aproveite a
                    beleza da cidade.
                </Text>
            </View>

            <View style={styles.destino}>
                <Text style={styles.nomeDestino}>
                    Rio de Janeiro, Brasil 🇧🇷
                </Text>
                <Text style={styles.descricao}>
                    Visite as praias e conheça o Cristo
                    Redentor.
                </Text>
            </View>

            <View style={styles.destino}>
                <Text style={styles.nomeDestino}>
                    Tóquio, Japão 🇯🇵
                </Text>
                <Text style={styles.descricao}>
                    Descubra uma cidade que mistura
                    tecnologia e tradição.
                </Text>
            </View>

            <View style={styles.botao}>
                <Button
                    title="Sobre o aplicativo"
                    onPress={() => navigation.navigate('Sobre')}
                    color="#007AFF"
                />
            </View>

            <View style={styles.botao}>
                <Button
                    title="Voltar para Home"
                    onPress={() => navigation.navigate('Home')}
                    color="#666666"
                />
            </View>
        </View>
    );
}
