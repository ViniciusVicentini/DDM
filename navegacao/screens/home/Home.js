
import { View, Text, Button } from 'react-native';

import styles from './Estilo';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Explore
            </Text>

            <Text style={styles.subtitulo}>
                Descubra lugares incríveis!
            </Text>

            <Text style={styles.texto}>
                Bem-vindo ao Explore! Aqui você pode
                conhecer destinos interessantes e
                descobrir novos lugares pelo mundo.
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
                    title="Sobre o aplicativo"
                    onPress={() => navigation.navigate('Sobre')}
                    color="#007AFF"
                />
            </View>

            <View style={styles.botao}>
                <Button
                    title="Voltar ao Login"
                    onPress={() => navigation.navigate('Login')}
                    color="#666666"
                />
            </View>

        </View>
    );
}
