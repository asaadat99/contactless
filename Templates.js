import * as React from 'react'
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

const Templates = ({ route, navigation }) => {
    const { type } = route.params;

    // store keys/values for input fields in state
    const [fields, setFields] = React.useState({});

    function updateField(field, value) {
        updatedFields = {};
        Object.assign(updatedFields, fields);
        updatedFields[field] = value;
        setFields(updatedFields);
    };

    if(type === "Professional") {
        return (
            <View>
                <ScrollView>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={fields.name}
                        onChangeText={text => updateField("name", text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={fields.email}
                        onChangeText={text => updateField("email", text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        value={fields.phone}
                        onChangeText={text => updateField("phone", text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="LinkedIn Profile"
                        value={fields.linkedin}
                        onChangeText={text => updateField("linkedin", text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Github Profile"
                        value={fields.github}
                        onChangeText={text => updateField("github", text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Website/Resume URL"
                        value={fields.website}
                        onChangeText={text => updateField("website", text)}
                    />
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

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

module.exports = Templates;