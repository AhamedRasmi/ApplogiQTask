import { Text, View, StyleSheet, Image, FlatList } from "react-native";

const offer = 'https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/zomato-banner-change_74B641A1E3AE1100D7015078982A3409.jpg'
const OfferImage = () => {
    return (
        <View style={{ marginVertical: 20 }}>
            <Image source={{ uri: offer }} style={{ height: 170, borderRadius: 12, marginHorizontal: 12 }} />
        </View>
    )
}

export default OfferImage;