import { Text, View, StyleSheet, Image, FlatList } from "react-native";
const logo1 = 'https://cdn.dribbble.com/users/418509/screenshots/14091820/media/39a386f211beeec58685eed64f6ef017.png?resize=400x0'
const logo2 = 'https://placeit-assets0.s3-accelerate.amazonaws.com/custom-pages/make-your-own-sports-logo-design/soccer-logo-maker-a196.png'

const DATA = [
    {
        id: '1',
        team1: 'CSK',
        team2: 'RCB',
        score1: '165/2',
        score2: '195/8',
        over1: '20.0',
        over2: '16.4',
        color: '#fe4a49',
        logo1: logo1,
        logo2: logo2
    },
    {
        id: '2',
        team1: 'CSK',
        team2: 'MI',
        score1: '165/2',
        score2: '195/8',
        over1: '20.0',
        over2: '16.4',
        color: '#fed766',
        logo1: logo1,
        logo2: logo2
    },
    {
        id: '3',
        team1: 'DC',
        team2: 'RCB',
        score1: '165/2',
        score2: '195/8',
        over1: '20.0',
        over2: '16.4',
        color: '#2ab7ca',
        logo1: logo1,
        logo2: logo2
    }
]

const LiveScores = () => {

    const renderData = ({ item }) => {
        return (
            <View style={[styles.card, { backgroundColor: item.color }]}>
                <Text style={{ color: 'white', margin: 12, fontSize: 16, fontWeight: '700' }}>Live</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{ uri: item.logo1 }} style={{ height: 50, width: 50, borderRadius: 25 }} />
                        <Text style={[styles.text, { marginTop: 8 }]}>{item.team1}</Text>
                        <Text style={styles.text}>{item.score1}</Text>
                        <Text style={styles.text}>{item.over1}</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{ uri: item.logo2 }} style={{ height: 50, width: 50, borderRadius: 25 }} />
                        <Text style={[styles.text, { marginTop: 8 }]}>{item.team2}</Text>
                        <Text style={styles.text}>{item.score2}</Text>
                        <Text style={styles.text}>{item.over2}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={{}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 14, marginVertical: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#717070' }}>Live Scores</Text>
                <Text style={{ color: 'blue' }}>See all</Text>
            </View>
            <View>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={renderData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 210,
        width: 270,
        borderRadius: 12,
        marginHorizontal: 8
    },
    text: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '500',
        marginVertical: 1
    }
})
export default LiveScores;