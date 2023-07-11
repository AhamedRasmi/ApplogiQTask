import { Text, View, StyleSheet, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const arrow = 'https://img.icons8.com/ios-glyphs/30/FFFFFF/chevron-right.png'
const Card = () => {
    return (
        <View style={styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <MaterialCommunityIcons name="arrow-bottom-left-thin-circle-outline" color="#fff" size={30} />
                <Text style={{ color: '#fff', fontWeight: '500', fontSize: 15 }}>You have 2 new request from clubs</Text>
                <Image source={{ uri: arrow }} style={{ height: 20, width: 20 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        height: 80,
        backgroundColor: '#3CB043',
        justifyContent: 'center',
        borderRadius: 12,
        marginHorizontal: 14
    }
})

export default Card;