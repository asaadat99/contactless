import React from 'react';
import { TextInput } from 'react-native';
import styles from "./Styles";

class Fields {
    constructor(updateField) {
        this.updateField = updateField;
    }

    addField(whichField) {
        let f = this.fields[whichField];
        delete this.fields[whichField];
        return f;
    }

    fields = {
        name: (
            <TextInput 
                style={styles.input}
                placeholder="Name"
                onChangeText={text => this.updateField("name", text)}
                placeholderTextColor="#878787"
            />
        ),
    };
}

export default Fields;