import * as React from 'react'
import { View, Text, Button } from 'react-native';

const Templates = ({ route, navigation }) => {
    const { type } = route.params;

    if(type === "Professional") {
        return (
            <View>
                <Text>
                    TODO
                </Text>
            </View>
        )
    }

    else return (
        <View>
            <Text>
                No template selected. Please try again.
            </Text>
        </View>
    )
}

module.exports = Templates;