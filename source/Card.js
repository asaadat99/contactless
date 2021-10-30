import React from 'react';
import { View } from 'react-native';
import styles from "./Styles.js";
import QRCode from 'react-native-qrcode-svg';
import LinearGradient from 'react-native-linear-gradient';

const Card = (props) => {
    return (
        <View>
            <LinearGradient colors={['#5e90db', '#0d10a6']} style={styles.card}>
                <View style={styles.qrcode}>
                    <QRCode
                        value={props.data["vcardString"]}
                        size={250}
                    />
                </View>
            </LinearGradient>
        </View>
    )
}

module.exports = Card;