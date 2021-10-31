import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button.js';
import * as fs from 'react-native-fs';
import CardSwapper from './CardSwapper';
import { useEffect } from 'react';

const HomeScreen = ({ navigation }) => {
    const [ cards, setCards ] = React.useState([]);
    const [ listening, setListening ] = React.useState(false);

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

    return (
        <View>
            <CardSwapper cards={cards} />
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