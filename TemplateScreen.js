import * as React from 'react'
import { View, Text, Button } from 'react-native';

const TemplateScreen = ({ navigation }) => {
    const [template, setTemplate] = React.useState("");

    if(template == null || template == "") {
        return (
            <View>
                <Button
                    title="Professional"
                    onPress={() => setTemplate("Professional") }
                />
            </View>
        )
    }

    return (
        <Text>nothing</Text>
    )
}

module.exports = TemplateScreen;