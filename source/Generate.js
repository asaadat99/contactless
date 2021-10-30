import React from 'react';
import { View, Text } from 'react-native';
import { writeFile, DocumentDirectoryPath, unlink } from 'react-native-fs';
import Button from './Button.js';

var vCardsJS = require('react-native-vcards');

// Given user input data as props, generates contact vcard and stores it
// Shows preview to use and adds a button to save the pass to the user's device
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

    return (
        <View>
            <Button title="Save Card"
                onPress={() => saveCard(contact, navigation)}
            />
            <Button title="Cancel"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

async function saveCard(contact, navigation) {
    // create object to store data needed to render card
    var cardData = {
        vcardString: contact.getFormattedString()
    };

    var cardpath = DocumentDirectoryPath + "/cards/card.json";

    // delete old card file with same name
    try {
        await unlink(cardpath);
    } catch(error) {}

    // write card data as json to file
    await writeFile(cardpath , JSON.stringify(cardData));
    
    // return to home screen
    navigation.navigate('Home');
}

module.exports = Generate;