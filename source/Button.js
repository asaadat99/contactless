import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from "./Styles.js";

export default function Button(props) {
    const { onPress, title } = props;

    // return blue button by default
    var buttonStyle = styles.button;

    return (
        <Pressable style={buttonStyle} onPress={onPress}>
            <Text style={styles.button_text}>{title}</Text>
        </Pressable>
    );
}