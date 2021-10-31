import React from 'react';
import { Pressable } from 'react-native';
import styles from "./Styles.js";
import Card from "./Card.js"

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

    if(cards.length === 0) {
        return null;
    }

    return (
        <Pressable onPress={onPress}>
            <Card key={currCard} data={cards[currCard]} />
        </Pressable>
    );
}

module.exports = CardSwapper;