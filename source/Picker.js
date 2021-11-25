import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from "./Styles.js";
import Button from './Button.js';

// props: 
//      options (object mapping string => function)
export default function FieldPicker(props) {
    const [ selected, setSelected ] = React.useState("test");

    return (
        <View>
            <Picker
                selectedValue={selected}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => {
                    setSelected(itemValue);
                }}
            >
                <Picker.Item label="test" value="test"/>
                <Picker.Item label="test" value="test"/>
            </Picker>
        </View>
    );
}