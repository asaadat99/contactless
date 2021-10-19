import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

var HomeScreen = require('./HomeScreen.js')
var TemplateScreen = require('./TemplatePicker.js')
var Generate = require('./Generate.js')
var Templates = require('./Templates.js')

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Contactless" }}
                />
                <Stack.Screen 
                    name="TemplatePicker"
                    component={TemplateScreen}
                    options={{ title: "Choose a template" }}
                />
                <Stack.Screen 
                    name="Templates"
                    component={Templates}
                    options={{ title: "Fill in your contact information" }}
                />
                <Stack.Screen 
                    name="Generate"
                    component={Generate}
                    options={{ title: "Preview" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
