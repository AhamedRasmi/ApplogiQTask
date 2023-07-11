import { Text, View, StyleSheet, Image, FlatList } from "react-native";

const logo1 = 'https://cdn.dribbble.com/users/418509/screenshots/14091820/media/39a386f211beeec58685eed64f6ef017.png?resize=400x0'
const logo2 = 'https://placeit-assets0.s3-accelerate.amazonaws.com/custom-pages/make-your-own-sports-logo-design/soccer-logo-maker-a196.png'
const profile = 'https://m.media-amazon.com/images/M/MV5BOThiOTJhZGQtNTlmZC00NDMzLWE5MzktZmY5N2Y0M2QyYzEyXkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_.jpg'
const profile2 = 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTvBcL0QiKXQFIDrvcbdi8Dwkf8rWUkcIjhmMMKr46VpaskgCmEZ_I0eETNAxKIo1hZdq-1QTlOrQEVpjM'

const DATA = [
    {
        id: '1',
        Runs: '109',
        balls: '90',
        fours: '08',
        sixes: '5',
        playerImg: profile2,
        StrikeRate: '140.8',
        rank: '1',
        logo: logo1
    },
    {
        id: '2',
        Runs: '101',
        balls: '99',
        fours: '10',
        sixes: '04',
        playerImg: profile,
        StrikeRate: '140.8',
        rank: '2',
        logo: logo2
    },
    {
        id: '3',
        Runs: '90',
        balls: '70',
        fours: '03',
        sixes: '05',
        playerImg: profile2,
        StrikeRate: '140.8',
        rank: '3',
        logo: logo1
    }
]

const RecentPerformance = () => {

    const renderData = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: item.logo }} style={{ height: 30, width: 30, borderRadius: 15 }} />
                        <Text style={{ color: '#000', margin: 12, fontSize: 15, fontWeight: '500' }}>RCB's 1st 11</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderRadius: 16, borderColor: '#eee', padding: 8, backgroundColor: '#9df0c2' }}>
                        <Text style={{ color: 'grey', fontSize: 12 }}>Man of the match</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 9, }}>
                    <Image source={{ uri: item.playerImg }} style={{ height: 65, width: 65, borderRadius: 30 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginLeft: 30 }}>
                            <Text>Runs</Text>
                            <Text style={styles.text}>{item.Runs}</Text>
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text>Balls</Text>
                            <Text style={styles.text}>{item.balls}</Text>
                        </View>
                        <View style={{ marginLeft: 30 }}>
                            <Text>4's</Text>
                            <Text style={styles.text}>{item.fours}</Text>
                        </View>
                        <View style={{ marginLeft: 40 }}>
                            <Text>6's</Text>
                            <Text style={styles.text}>{item.sixes}</Text>
                        </View>
                    </View>
                    <View>
                    </View>
                </View>
                <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
                    <Text>SR : <Text style={styles.rank}>{item.StrikeRate}</Text></Text>
                </View>
                <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                    <Text>Current Rank <Text style={styles.rank}>{item.rank}</Text></Text>
                </View>
            </View>
        )
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 14, marginTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#717070' }}>Recent Performance</Text>
                <Text style={{ color: 'blue' }}>Full Scoreboard</Text>
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
        height: 180,
        width: 360,
        borderRadius: 12,
        marginHorizontal: 8,
        backgroundColor: '#e6e6ea',
        marginVertical: 20
    },
    text: {
        fontSize: 18,
        color: '#000',
        fontWeight: '700',
        // marginVertical: 1
    },
    rank: {
        fontSize: 15,
        color: '#6e5c5c',
        fontWeight: '500',
    }
})
export default RecentPerformance;