
import { View, Text, Button } from 'react-native';

import styles from './Estilo';

export default function Sobre({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Sobre o Explore
            </Text>

            <Text style={styles.subtitulo}>
                Descubra o mundo com a gente!
            </Text>

            <Text style={styles.texto}>
                O Explore é um aplicativo criado para
                apresentar lugares interessantes ao
                redor do mundo.
            </Text>

            <Text style={styles.texto}>
                Nosso objetivo é despertar a curiosidade
                dos usuários e incentivar a descoberta
                de novas culturas, cidades e paisagens.
            </Text>

            <View style={styles.botao}>
                <Button
                    title="Conhecer destinos"
                    onPress={() => navigation.navigate('Destinos')}
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
