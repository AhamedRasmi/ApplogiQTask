import { Text, View, StyleSheet, Image } from "react-native";

const DATA = [
    {
        id: '1',
        team1: 'Chennai Super Kings',
        team2: 'Royal Challengers Bangalore'
    }
]
const UpcomingEvents = () => {
    return (
        <View style={{ marginVertical: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 14 }}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#717070' }}>Upcoming Events </Text>
                <Text style={{ color: 'blue' }}>See all</Text>
            </View>
            <View style={styles.card}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {

    }
})
export default UpcomingEvents;