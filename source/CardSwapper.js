import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from "./Styles.js";
import Card from "./Card.js"
import Button from './Button.js';
import * as fs from 'react-native-fs';

const CardSwapper = (props) => {
    const { cards } = props;
    const [ currCard, setCurrCard ] = React.useState(0);

    function onPress() {
        if(currCard + 1 === cards.length) {
            setCurrCard(0);
        } else {
            setCurrCard(currCard + 1);
        }
    };

    var promptText = <Text></Text>;
    var buttons = (
        <View>
            <Button
                title="Create a new card"
                onPress={() => 
                    props.navigation.navigate('TemplatePicker')
                }
            />
        </View>
    );

    if(cards.length === 0) {
        return (
            <View>
                <Text></Text>
                {buttons}
            </View>
        );
    }

    if(cards.length > 1) {
        promptText = (
            <Text style={styles.body_text}>
                Tap to switch cards
            </Text>
        );
    }

    return (
        <View>
            {promptText}
            <Pressable onPress={onPress}>
                <Card key={currCard} data={cards[currCard].data} />
            </Pressable>
            {buttons}
            <Button
                title="Delete this card"
                onPress={() => {
                    setCurrCard(0);
                    props.deleteCard(cards[currCard].path);
                }}
            />
        </View>
    );
}



module.exports = CardSwapper;