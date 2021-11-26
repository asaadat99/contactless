import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from './Button.js';
import styles from './Styles.js';
import { Picker } from '@react-native-picker/picker';

// Given user input data as props, generates contact vcard and stores it
// Shows preview to use and adds a button to save the pass to the user's device
const Customize = ({ route, navigation }) => {
    const { routeFields } = route.params;
    const [ selectedColor, setSelectedColor ] = React.useState("Blue Gradient");

    // put preset colors in this list in the order they will be listed in the UI
    const colors = {
        "Blue": ['#4287f5', '#4287f5'],
        "Blue Gradient": ['#19babf', '#2045a1'],
        "Red": ['#c61235', '#c61235'],
        "Red Gradient": ['#db375d', '#9e1e70'],
        "Green": ['#39bf54', '#39bf54'],
        "Green Gradient": ['#1dcf81', '#15821c'],
        "Purple": ['#902abf', '#902abf'],
        "Purple Gradient": ['#c914ab', '#5a169e']
    };

    // Hardcode "Blue Gradient" as default color since using colors here
    // seems to cause an issue
    const [ fields, setFields ] = React.useState(
        Object.assign(routeFields, {
            topText: routeFields["Name"],
            bottomText: routeFields["type"],
            color: ['#19babf', '#2045a1']
        })
    );

    // Function for updating field value on text input change
    function updateField(field, value) {
        var updatedFields = {};
        Object.assign(updatedFields, fields);
        updatedFields[field] = value;
        setFields(updatedFields);
    };

    // Update color field and set selected color
    function setColor(color) {
        updateField("color", colors[color]);
        setSelectedColor(color);
    }

    // Generate the picker options
    var PickerOptions = []
    Object.keys(colors).forEach((c) => {
        PickerOptions.push(
            <Picker.Item key={c} label={c} value={c} />
        );
    });


    return (
        <View>
            <Text style={styles.body_text}>Card Top Text</Text>
            <TextInput 
                style={styles.input}
                value={fields["topText"]}
                onChangeText={text => updateField("topText", text)}
                placeholderTextColor="#878787"
            />
            <Text style={styles.body_text}>Card Bottom Text</Text>
            <TextInput 
                style={styles.input}
                value={fields["bottomText"]}
                onChangeText={text => updateField("bottomText", text)}
                placeholderTextColor="#878787"
            />
            <Text style={styles.body_text}>Card Color</Text>
            <Picker
                selectedValue={selectedColor}
                style={styles.picker_wide}
                onValueChange={(itemValue, itemIndex) => {
                    setColor(itemValue);
                }}
            >
                {PickerOptions}
            </Picker>
            <Text></Text>
            <Button
                title="Continue"
                onPress={() => {
                    var gotFields = {};
                    Object.assign(gotFields, fields);
                    // User must input topText to continue
                    // if(gotFields["topText"] == undefined || gotFields["topText"] == "") {
                    //     return;
                    // }
                    navigation.navigate('Generate', { fields: gotFields });
                }}
            />
        </View>
    );
}

module.exports = Customize;