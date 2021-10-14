import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

var HomeScreen = require('./HomeScreen.js')
var TemplateScreen = require('./TemplateScreen.js')
const Stack = createNativeStackNavigator();

const App: () => Node = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Templates" component={TemplateScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
