import * as React from 'react'
import { View, Text, Button } from 'react-native';

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