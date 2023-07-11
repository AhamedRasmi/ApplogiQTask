import { Text, View, Image, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const profile = 'https://m.media-amazon.com/images/M/MV5BOThiOTJhZGQtNTlmZC00NDMzLWE5MzktZmY5N2Y0M2QyYzEyXkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_.jpg'
const Header = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: profile }} style={styles.profile} />
            <View style={{ marginRight: 70 }}>
                <Text style={styles.name}>Marnus Labuschagne</Text>
                <Text style={{ color: 'grey' }}>Right hand Batsman</Text>
            </View>
            <Ionicons name="notifications" color="gray" size={25} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    profile: {
        height: 55,
        width: 55,
        borderRadius: 25
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black'
    }
})
export default Header;