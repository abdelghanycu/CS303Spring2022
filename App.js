import * as React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn, {routeName as signInRoute} from "./src/SignIn";
import SignUp, {routeName as signUpRoute} from "./src/SignUp";
import Home, {routeName as homeRoute} from "./src/Home";
import Profile, {routeName as profileRoute} from "./src/Profile";
import {AuthContext} from "./src/Utils";

function SplashScreen() {
    return (
        <View>
            <Text>Loading...</Text>
        </View>
    );
}

const Stack = createStackNavigator();

export default function App({navigation}) {

    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: true,
            userToken: null,
        }
    );

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            dispatch({type: 'RESTORE_TOKEN', token: null});
        };
        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async (data) => {
                console.log('from useMemo: ', data)
                dispatch({ type: 'SIGN_IN', token: data.token });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            // signUp: async (data) => {
            //     dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            // },
        }),
        []
    );

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <Stack.Navigator>
                    {state.isLoading ? (
                        // We haven't finished checking for the token yet
                        <Stack.Screen name="Splash" component={SplashScreen}/>
                    ) : state.userToken == null ? (
                        <>
                            <Stack.Screen name={signInRoute} component={SignIn}/>
                            <Stack.Screen name={signUpRoute} component={SignUp}/>
                        </>
                    ) : (
                        <>
                            <Stack.Screen name={homeRoute} component={Home}/>
                            <Stack.Screen name={profileRoute} component={Profile}/>
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
