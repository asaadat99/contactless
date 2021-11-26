import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from "./Styles.js";
import Button from './Button.js';

// props: 
//      options (list of available fields)
//      onPress (for when button is pressed)
export default function FieldPicker(props) {
    const [ selected, setSelected ] = React.useState("test");

    var pickerOptions = [];
    props.options.forEach((opt) => {
        pickerOptions.push((
            <Picker.Item key={opt} label={opt} value={opt} />
        ));
    })

    return (
        <View style={{ flexDirection: "row" }}>
            <Button
                title="Add Field"
                onPress={() => {props.onPress(selected)}}
                type="picker"
            />
            <Picker
                selectedValue={selected}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => {
                    setSelected(itemValue);
                }}
            >
                {pickerOptions}
            </Picker>
        </View>
    );
}