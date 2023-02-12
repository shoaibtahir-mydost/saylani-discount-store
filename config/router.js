import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../src/screens/SignUp';
import SplashScreen from '../src/screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />
                {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;

