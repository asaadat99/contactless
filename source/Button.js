import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from "./Styles.js";

export default function Button(props) {
    const { onPress, title} = props;
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.button_text}>{title}</Text>
      </Pressable>
    );
  }