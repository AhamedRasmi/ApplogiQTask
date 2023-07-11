import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './Tabs/BottomTabs';
import LeagueScreen from '../screens/LeagueScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName='BottomTab' screenOptions={{
            headerShown: false, statusBarColor: '#1a3c43'
        }}>
            <Stack.Screen name="BottomTab" component={BottomTabs} />
        </Stack.Navigator>
    )
}

export default AuthStack;