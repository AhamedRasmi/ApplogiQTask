import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from "react-native";
import OverView from '../../components/OverView';

const Tab = createMaterialTopTabNavigator();

const Events = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Events</Text>
        </View>
    )
}
const Payments = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Payments</Text>
        </View>
    )
}

const Places = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Places</Text>
        </View>
    )
}

const TopTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: { fontSize: 13, color: '#000' },
            tabBarStyle: {
                backgroundColor: "#eee",
                marginTop: 20
            }
        }}>
            <Tab.Screen name="OverView" component={OverView} />
            <Tab.Screen name="Events" component={Events} />
            <Tab.Screen name="Payments" component={Payments} />
            <Tab.Screen name="Places" component={Places} />
        </Tab.Navigator>
    )
}

export default TopTabs;