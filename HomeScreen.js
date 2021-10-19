import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Create a new pass"
                onPress={() => 
                    navigation.navigate('TemplatePicker')
                }
            />
        </View>
    )
}

module.exports = HomeScreen;