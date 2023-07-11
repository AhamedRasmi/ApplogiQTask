import { Text, View, ScrollView } from "react-native";
import Card from "./Card";
import UpcomingEvents from "./UpcomingEvents";
import LiveScores from "./LiveScores";
import RecentPerformance from "./RecentPerformance";
import MoreActions from "./MoreActions";
import Polls from "./Polls";
import OfferImage from "./Offer";
import Places from "./Places";

const OverView = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Card />
            <LiveScores />
            <RecentPerformance />
            <MoreActions />
            <Polls />
            <OfferImage />
            <Places />
        </ScrollView>
    )
}
export default OverView;