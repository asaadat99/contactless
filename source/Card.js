import React from 'react';
import { View } from 'react-native';
import styles from "./Styles.js";
import QRCode from 'react-native-qrcode-svg';

const Card = (props) => {
    return (
        <View style={styles.card}>
            <QRCode
                value={props.data["vcardString"]}
                size={250}
            />
        </View>
    )
}

module.exports = Card;