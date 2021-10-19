import React from 'react';
import { View, Text } from 'react-native';

var vCardsJS = require('react-native-vcards');

// Given user input data as props, generates QR code and Apple Wallet pass
// Then, it returns the preview to the pass and confirm/cancel buttons
// TOOD: if unable to preview pass, confirm all inputs instead
const Generate = ({ route, navigation }) => {
    const { fields } = route.params;

    // create data structure with contact info
    const contact = vCardsJS();

    // do this in a loop to handle custom fields
    for (const [key, value] of Object.entries(fields)) {
        if(value === "" || value == null) {
            continue;
        }
        switch(key) {
        case "name":
            const firstSpace = value.indexOf(' ');
            contact.firstName = value.slice(0, firstSpace);
            contact.lastName = value.slice(firstSpace + 1);
            break;
        case "email":
            contact.email = value;
            break;
        case "phone":
            contact.cellPhone = value;
            break;
        }
    }

    // generate QR code

    // generate apple wallet passvcards

    return (
        <View>
            <Text>
                TODO
            </Text>
        </View>
    )
}

module.exports = Generate;