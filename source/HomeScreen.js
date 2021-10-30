import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button.js';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Create a new card"
                onPress={() => 
                    navigation.navigate('TemplatePicker')
                }
            />
        </View>
    )
}

module.exports = HomeScreen;