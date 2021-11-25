import React from 'react';
import { View, Text, ScrollView } from 'react-native';
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

    async function loadCards() {
        // attempt to load cards from file system
        let cardspath = fs.DocumentDirectoryPath + "/cards";
    
        // read files from cards dir, create it if it doesn't exist
        let files = [];
        try {
            files = await fs.readdir(cardspath);
        } catch (error) {
            await fs.mkdir(cardspath);
            return [];
        }
    
        // read the files
        let cards = [];
    
        for(let f of files) {
            let cardData;
            try {
                cardData = await fs.readFile(cardspath + "/" + f);
            }
            catch(error) {
                continue;
            }

            cards.push({
                data: JSON.parse(cardData),
                path: cardspath + "/" + f
            });
        }
    
        return cards;
    }
    
    async function deleteCard(cardpath) {
        await fs.unlink(cardpath);
        loadCards().then((res) => { 
            setCards(res);
        });
    }

    return (
        <View>
            <ScrollView>
                <CardSwapper 
                    cards={cards} 
                    navigation={navigation}
                    deleteCard={deleteCard}
                />
            </ScrollView>
        </View>
    )
}

module.exports = HomeScreen;