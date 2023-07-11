import React from 'react';
import DashboardScreen from '../../screens/DashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClubScreen from '../../screens/ClubScreen';
import LeagueScreen from '../../screens/LeagueScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TopTabs from './TopTabs';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: "#1a3c43",
                    height: 70,
                    elevation: 5
                },
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: '#fff',
            }}
            initialRouteName="DashboardScreen"

        >
            <Tab.Screen
                name="DashboardScreen"
                component={DashboardScreen}
                options={{
                    // tabBarLabel: false,
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="home" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="ClubScreen"
                component={ClubScreen}
                options={{
                    tabBarLabel: 'Clubs',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="search" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="LeagueScreen"
                component={LeagueScreen}
                options={{
                    tabBarLabel: 'Leagues',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="receipt" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="More"
                component={LeagueScreen}
                options={{
                    tabBarLabel: 'More',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="more" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>

    )
}

export default BottomTabs;