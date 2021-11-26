import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import Button from './Button.js';
import styles from "./Styles.js";
import FieldPicker from './Picker.js'

const Templates = ({ route, navigation }) => {
    const { type } = route.params;

    const [ visibleFields, setVisibleFields ] = React.useState([]);
    // store keys/values for input fields in state
    const [ fields, setFields ] = React.useState({});

    const [ fieldsList, setFieldsList ] = React.useState([
        "Name",
        "Email",
        "Phone Number",
        "LinkedIn Username",
        "Instagram Username",
        "Snapchat Username",
        "Github Username",
        "Website/Resume URL",
    ]);

    const fieldPrompt = "(select field)";
    
    function updateField(field, value) {
        var updatedFields = {};
        Object.assign(updatedFields, fields);
        updatedFields[field] = value;
        setFields(updatedFields);
    };

    function createField(fieldname) {
        return (
            <TextInput 
                style={styles.input}
                placeholder={fieldname}
                value={fields[fieldname]}
                onChangeText={text => updateField(fieldname, text)}
                placeholderTextColor="#878787"
                key={fieldname}
            />
        );
    }

    function makeVisibleFields(fieldNames) {
        // Check if this field has been added already
        var newList = [].concat(fieldsList);
        var newVis = [].concat(visibleFields);

        fieldNames.filter((fname) => {

            return fieldsList.indexOf(fname) !== -1;
        
        }).forEach((fieldName) => {
            // Mark field as added
            newList.splice(newList.indexOf(fieldName), 1);
            // Create and add the field
            newVis = newVis.concat(fieldName);
        });

        // Check if we've changed anything to update state
        if(JSON.stringify(fieldsList) !== JSON.stringify(newList)) {
            setFieldsList(newList);
            setVisibleFields(newVis);
        }
    }
    
    const buttons = (
        <View>
            <FieldPicker
                options={[fieldPrompt].concat(fieldsList)}
                onPress={(field) => {
                    if(field === fieldPrompt) {
                        return;
                    }
                    makeVisibleFields([field]);
                }}
            />
            <Text></Text>
            <Button
                title="Continue"
                onPress={() => {
                    var gotFields = {};
                    Object.assign(gotFields, fields);
                    // User must input name
                    if(gotFields["Name"] == undefined || gotFields["Name"] == "") {
                        return;
                    }
                    gotFields["type"] = type;
                    navigation.navigate('Generate', { fields: gotFields });
                }}
            />
        </View>
    );

    if(type === "Professional") {
        makeVisibleFields([
            "Name", 
            "Email", 
            "Phone Number", 
            "LinkedIn Username", 
            "Website/Resume URL"
        ]);
    }

    if(type === "Social") {
        makeVisibleFields([
            "Name", 
            "Email", 
            "Phone Number", 
            "Instagram Username", 
            "Snapchat Username"
        ]);
    }

    if(type === "Custom") {
        makeVisibleFields([
            "Name",
            "Phone Number"
        ]);
    }

    // create fields to display
    let visibleFieldsJSX = []
    visibleFields.forEach((f) => {
        visibleFieldsJSX.push(createField(f));
    })

    return (
        <ScrollView>
            <Text></Text>
            {visibleFieldsJSX}
            {buttons}
            <Text></Text>
        </ScrollView>
    );
}

module.exports = Templates;