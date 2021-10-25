import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Passkit, { AddPassButton } from 'react-native-passkit-wallet';
import PassKit from 'react-native-passkit-wallet';

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
            if(firstSpace !== -1) {
                contact.firstName = value.slice(0, firstSpace);
                contact.lastName = value.slice(firstSpace + 1);
            } else {
                contact.firstName = value;
            }
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

    // generate apple wallet pass vcards
    passkitAvailable = false;
    PassKit.canAddPasses().then((result) => {
        passkitAvailable = true;
    })

    return (
        <View>
            <Text>
                {contact.getFormattedString()}
            </Text>
            <QRCode
                value={contact.getFormattedString()}
            />
            {passkitAvailable
                ? <Text> passket is available </Text>
                : <Text> passkit is NOT available </Text>
            }
        </View>
    )
}

module.exports = Generate;