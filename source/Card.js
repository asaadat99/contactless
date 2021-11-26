import React from 'react';
import { View, Text } from 'react-native';
import styles from "./Styles.js";
import QRCode from 'react-native-qrcode-svg';
import LinearGradient from 'react-native-linear-gradient';

const Card = (props) => {
    return (
        <View>
            <LinearGradient colors={props.data["color"]} style={styles.card}>
                <Text style={styles.card_title_text}>
                    {props.data["topText"]}
                </Text>
                <View style={styles.qrcode}>
                    <QRCode
                        value={props.data["vcardString"]}
                        size={275}
                    />
                </View>
                <Text style={styles.card_title_text}>
                    {props.data["bottomText"]}
                </Text>
            </LinearGradient>
        </View>
    )
}

module.exports = Card;