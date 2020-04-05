import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage, QuestionListPage, QuestionDetailPage } from '../Pages/index';
import { HeaderComp } from '../Components/HeaderComp'
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
    
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomePage}
        options={{
          title: 'Ana Ekran'
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={QuestionListPage}
        options={{
          title: 'Testler'
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'KPSS HAKKINDA TÜYOLAR';
    case 'Links':
      return 'Testler';
  }
}
