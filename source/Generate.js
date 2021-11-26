import React from 'react';
import { View, Text } from 'react-native';
import { writeFile, DocumentDirectoryPath, unlink, readdir } from 'react-native-fs';
import Button from './Button.js';
import Card from './Card.js';

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
        case "Name":
            const firstSpace = value.indexOf(' ');
            if(firstSpace !== -1) {
                contact.firstName = value.slice(0, firstSpace);
                contact.lastName = value.slice(firstSpace + 1);
            } else {
                contact.firstName = value;
            }
            break;
        case "Email":
            contact.email = value;
            break;
        case "Phone Number":
            contact.cellPhone = value;
            break;
        case "LinkedIn Username":
            contact.socialUrls["linkedIn"] = "https://www.linkedin.com/in/" + value;
            break;
        case "Github Username":
            contact.socialUrls["GitHub"] = "https://github.com/" + value;
            break;
        case "Website/Resume URL":
            contact.url = value;
            break;
        case "Instagram Username":
            contact.socialUrls["instagram"] = "https://www.instagram.com/" + value;
            break;
        case "Snapchat Username":
            contact.socialUrls["snapchat"] = "http://www.snapchat.com/add/" + value;
            break;
        }
    }

    // temporary color setting
    // TODO: make this an option for the user
    var color = [];
    if(fields["type"] == "Professional") {
        color = ['#19babf', '#2045a1'];
    } else {
        color = ['#db375d', '#9e1e70'];
    }

    // create object to store data needed to render card
    var cardData = {
        vcardString: contact.getFormattedString(),
        name: fields["Name"],
        type: fields["type"],
        color: color,
    };

    return (
        <View>
            <Text></Text>
            <Button title="Save Card"
                onPress={() => saveCard(cardData).then(() => navigation.navigate('Home'))}
            />
            <Button title="Cancel"
                onPress={() => navigation.navigate('Home')}
            />
            <Card data={cardData} />
        </View>
    )
}

async function saveCard(cardData) {
    let files = await readdir(DocumentDirectoryPath + "/cards");
    let cardnum = files.length + 1;
    let cardpath = DocumentDirectoryPath + "/cards/card-" + cardnum + ".json";

    // delete old card file with same name
    // try {
    //     await unlink(cardpath);
    // } catch(error) {
    //     // if the file was not found, do nothing
    // }

    // write card data as json to file
    await writeFile(cardpath , JSON.stringify(cardData));

    return null;
}

module.exports = Generate;