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
        "Email"
    ]);

    const fieldPrompt = "(select field)";
    
    function updateField(field, value) {
        let updatedFields = {};
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
            newVis = newVis.concat(createField(fieldName));
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
                    let gotFields = {};
                    Object.assign(gotFields, fields);
                    // User must input name
                    if(gotFields["Name"] == undefined || gotFields["name"] == "") {
                        return;
                    }
                    gotFields["type"] = "Professional";
                    navigation.navigate('Generate', { fields: gotFields });
                }}
            />
        </View>
    );

    if(type === "Professional") {
        makeVisibleFields(["Name", "Email"]);
    }

    return (
        <View>
            <Text></Text>
            {visibleFields}
            {buttons}
        </View>
    );

    if(type === "Professional") {
        return (
            <View>
                <ScrollView>
                    {fieldInput.addField("name")}
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        value={fields.phone}
                        onChangeText={text => updateField("phone", text)}
                        placeholderTextColor="#878787"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="LinkedIn Profile"
                        value={fields.linkedin}
                        onChangeText={text => updateField("linkedin", text)}
                        placeholderTextColor="#878787"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Github Profile"
                        value={fields.github}
                        onChangeText={text => updateField("github", text)}
                        placeholderTextColor="#878787"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Website/Resume URL"
                        value={fields.website}
                        onChangeText={text => updateField("website", text)}
                        placeholderTextColor="#878787"
                    />
                    {buttons}
                </ScrollView>
            </View>
        )
    }

    if(type === "Social") {
        return (
            <View>
                <ScrollView>
                    <TextInput 
                        style={styles.input}
                        placeholder="Name"
                        value={fields.name}
                        onChangeText={text => updateField("name", text)}
                        placeholderTextColor="#878787"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={fields.email}
                        onChangeText={text => updateField("email", text)}
                        placeholderTextColor="#878787"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        value={fields.phone}
                        onChangeText={text => updateField("phone", text)}
                        placeholderTextColor="#878787"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Instagram Profile"
                        value={fields.linkedin}
                        onChangeText={text => updateField("instagram", text)}
                        placeholderTextColor="#878787"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Snapchat Profile"
                        value={fields.linkedin}
                        onChangeText={text => updateField("snapchat", text)}
                        placeholderTextColor="#878787"
                    />
                    {buttons}
                </ScrollView>
            </View>
        )
    }

    else return (
        <View>
            <Text>
                No template selected. Please try again.
            </Text>
        </View>
    )
}

module.exports = Templates;