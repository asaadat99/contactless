import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button.js';

const TemplatePicker = ({ navigation }) => {
    return (
        <View>
            <Text></Text>
            <Button
                title="Professional"
                onPress={() =>  
                    navigation.navigate('Templates', { type: "Professional" })
                }
            />
            <Button
                title="Social"
                onPress={() =>  
                    navigation.navigate('Templates', { type: "Social" })
                }
            />
            <Button
                title="Custom"
                onPress={() =>  
                    navigation.navigate('Templates', { type: "Custom" })
                }
            />
        </View>
    )
}

module.exports = TemplatePicker;