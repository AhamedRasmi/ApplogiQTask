import { Text, View, StyleSheet, Image, FlatList } from "react-native";

const arrow = "https://img.icons8.com/ios-filled/50/228BE6/circled-down-left-2.png"
const logo1 = 'https://cdn.dribbble.com/users/418509/screenshots/14091820/media/39a386f211beeec58685eed64f6ef017.png?resize=400x0'
const logo2 = 'https://placeit-assets0.s3-accelerate.amazonaws.com/custom-pages/make-your-own-sports-logo-design/soccer-logo-maker-a196.png'
const euro = "https://img.icons8.com/ios-filled/50/228BE6/euro-pound-exchange.png"
const MoreActions = () => {
    return (
        <View>
            <View style={{ marginHorizontal: 14, }}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#717070' }}>More Actions</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.card}>
                    <Image source={{ uri: arrow }} style={{ height: 40, width: 40, marginHorizontal: 14, marginVertical: 8 }} />
                    <Text style={{ marginHorizontal: 14, marginVertical: 2 }}>Requests</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: logo1 }} style={{ height: 30, width: 30, borderRadius: 20, marginHorizontal: 12 }} />
                        <Text style={styles.name}>DB Club</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: logo2 }} style={{ height: 30, width: 30, borderRadius: 20, marginHorizontal: 12 }} />
                        <Text style={styles.name}>DB Club</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image source={{ uri: euro }} style={{ height: 40, width: 40, marginHorizontal: 14, marginVertical: 8 }} />
                    <Text style={{ marginHorizontal: 14, marginVertical: 2 }}>Payments</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: logo1 }} style={{ height: 30, width: 30, borderRadius: 20, marginHorizontal: 12 }} />
                        <Text style={styles.name}>€ 12.44     <Text style={{ color: 'red' }}>Due</Text></Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={{ uri: logo2 }} style={{ height: 30, width: 30, borderRadius: 20, marginHorizontal: 12 }} />
                        <Text style={styles.name}>€ 234.12   <Text style={{ color: 'green' }}>Paid</Text></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 180,
        width: '46%',
        borderRadius: 12,
        marginHorizontal: 8,
        backgroundColor: '#e6e6ea',
        marginVertical: 20,
        // marginHorizontal: 14,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginVertical: 5
    }
})
export default MoreActions;