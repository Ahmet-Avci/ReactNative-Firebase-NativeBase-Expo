import * as React from "react";
import { Root } from "native-base";
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QuestionDetailPage } from './Pages/QuestionDetailPage'
import BottomTabNavigator from './Navigation/Navigation';
import useLinking from './Navigation/useLinking';

const Stack = createStackNavigator();

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [initialNavigationState, setInitialNavigationState] = React.useState();
    const containerRef = React.useRef();
    const { getInitialState } = useLinking(containerRef);

    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();

                setInitialNavigationState(await getInitialState());

                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
    } else {
        return (

            <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
                <Root>
                    <Stack.Navigator>
                        <Stack.Screen name="Root" component={BottomTabNavigator} />
                        <Stack.Screen name="Detail" component={QuestionDetailPage} />
                    </Stack.Navigator>
                </Root>
            </NavigationContainer>
        );
    }
}
