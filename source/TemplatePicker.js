import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button.js';

const TemplatePicker = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Professional"
                onPress={() =>  
                    navigation.navigate('Templates', { type: "Professional" })
                }
            />
        </View>
    )
}

module.exports = TemplatePicker;