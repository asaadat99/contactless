import React from 'react';
import { View, Text } from 'react-native';
import styles from "./Styles.js";
import QRCode from 'react-native-qrcode-svg';
import LinearGradient from 'react-native-linear-gradient';

const Card = (props) => {
    return (
        <View>
            <LinearGradient colors={['#5e90db', '#0d10a6']} style={styles.card}>
                <Text style={styles.card_title_text}>
                    {props.data["name"]}
                </Text>
                <View style={styles.qrcode}>
                    <QRCode
                        value={props.data["vcardString"]}
                        size={250}
                    />
                </View>
                <Text style={styles.card_title_text}>
                    {props.data["type"]}
                </Text>
            </LinearGradient>
        </View>
    )
}

module.exports = Card;