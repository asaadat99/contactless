import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button.js';
import * as fs from 'react-native-fs';
import Card from './Card.js';

const HomeScreen = ({ navigation }) => {
    const [ cards, setCards ] = React.useState([]);

    var cardDisplays = [];
    loadCards().then((res) => { 
        // checking to make sure result is different before setting state
        // to prevent looping in rendering this component
        if(res.length !== cards.length) {
            setCards(res);
        }
    })

    // create card objects to be rendered
    // var i = 0;
    // for(let card of cards) {
    //     cardDisplays.push(
    //         <Card key={i} data={card} />
    //     );
    // }
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