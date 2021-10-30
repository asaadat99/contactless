import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button.js';
import * as fs from 'react-native-fs';
import Card from './Card.js';
import { useEffect } from 'react';

const HomeScreen = ({ navigation }) => {
    const [ cards, setCards ] = React.useState([]);
    const [ listening, setListening ] = React.useState(false);
    var cardDisplays = [];

    useEffect(() => {
        if (!listening) {
            navigation.addListener('focus', () => {
                loadCards().then((res) => { 
                    setCards(res);
                });
            });
            setListening(true);
        }   
    });

    if(cards.length !== 0) {
        cardDisplays.push(
            <Card key={0} data={cards[0]} /> 
        );
    }

    return (
        <View>
            {cardDisplays}
            <Button
                title="Create a new card"
                onPress={() => 
                    navigation.navigate('TemplatePicker')
                }
            />
        </View>
    )
}

async function loadCards() {
    // attempt to load cards from file system
    var cardspath = fs.DocumentDirectoryPath + "/cards";

    // read files from cards dir, create it if it doesn't exist
    var files = [];
    try {
        files = await fs.readdir(cardspath);
    } catch (error) {
        await fs.mkdir(cardspath);
        return [];
    }

    // read the files
    var cards = [];

    for(let f of files) {
        cards.push(JSON.parse(await fs.readFile(cardspath + "/" + f)));
    }

    return cards;
}

module.exports = HomeScreen;