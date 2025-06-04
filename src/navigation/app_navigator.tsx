import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home_screen';
import LoginScreen from '../screens/login_screen';
import NewsDetailScreen from '../screens/news_detail';

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    NewsDetail: {
        image: string;
        title: string;
        description: string;
        date: string;
    };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
                name="NewsDetail"
                component={NewsDetailScreen}
                options={{ headerShown: true, title: 'Notícia' }}
            />

        </Stack.Navigator>
    );
}
