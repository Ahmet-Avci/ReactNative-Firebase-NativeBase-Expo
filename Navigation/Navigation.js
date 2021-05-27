import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomePage, QuestionListPage, StatusPage } from '../Pages/index';
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Links';

export default function BottomTabNavigator({ navigation, route }) {

    navigation.setOptions({ headerTitle: getHeaderTitle(route) });

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                style={styles.bottom}
                name="Links"
                component={QuestionListPage}
                options={{
                    title: 'TESTLER',
                    tabBarIcon: () => <Ionicons name="ios-flask" size={32} color="#6fa8fc" />
                }}
            />
            <BottomTab.Screen
                style={styles.bottom}
                name="Status"
                component={StatusPage}
                options={{
                    title: 'DURUM',
                    tabBarIcon: () => <Ionicons name="ios-person" size={32} color="#6fa8fc" />
                }}
            />
            <BottomTab.Screen
                style={styles.bottom}
                name="Home"
                component={HomePage}
                options={{
                    title: 'MOTİVASYON',
                    tabBarIcon: () => <Ionicons name="ios-happy" size={32} color="#6fa8fc" />
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Home':
            return 'Motivasyon';
        case 'Links':
            return 'Testler';
    }
}

const styles = StyleSheet.create({
    bottom: {
        fontWeight: "bold",
        padding: 15
    }
});
