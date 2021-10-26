import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import PassKit, { AddPassButton } from 'react-native-passkit-wallet';
import styles from "./Styles.js";
import { generate } from 'css-tree';

var vCardsJS = require('react-native-vcards');
var Buffer = require('buffer').Buffer;

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

    // generate apple wallet pass
    // TODO: generate serial number
    // TODO: get team identifier issued by apple
    pass = {
        "description": "Test pass",
        "formatVersion": 1,
        "organizationName": "Contactless",
        "passTypeIdentifier": "pass.com.contactless.card",
        "serialNumber": 12345,
        "teamIdentifier": "TODO",
        "storeCard": {
            
        },
        "barcodes": [
            {
                "format": "PKBarcodeFormatQR",
                "message": contact.getFormattedString(),
                "messageEncoding": "iso-8859-1"
            }
        ]
    };

    var encodedPass = Buffer.from(JSON.stringify(pass).toString("base64"));    

    // prompt user to add pass (testing on android)
    // TODO: need to enocde pass as zip file, this doesn't work yets
    PassKit.addPass(encodedPass, "com.contactless.fileprovider"); 

    return (
        <View></View>
    )

    // use this for final iOS build
    /* return (
        <View>
            <AddPassButton
                style={styles.button}
                addPassButtonStyle={PassKit.addPassButtonStyle.black}
                onPress={() => PassKit.addPass(encodedPass)}
            />
        </View>
    ) */
}

module.exports = Generate;