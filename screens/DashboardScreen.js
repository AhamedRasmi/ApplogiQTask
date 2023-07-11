import { Text, View } from "react-native";
import Header from "../components/Header";
import TopTabs from "../navigation/Tabs/TopTabs";

const DashboardScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <TopTabs />
        </View>
    )
}

export default DashboardScreen;