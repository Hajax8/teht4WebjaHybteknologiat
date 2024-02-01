import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function Add(items, setItems) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const save = () => {
        const newPerson = {
            id: items.length + 1,
            lastname: lastName,
            firstname: firstName,
        }
        console.log('error');
        const tempItems = [...items, newPerson];
        console.log('error2');

        setItems(tempItems)
        setFirstName('')
        setLastName('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={firstName}
                onChangeText={text => setFirstName(text)}
                placeholder="Firstname..."
            />
            <TextInput
                value={lastName}
                onChangeText={text => setLastName(text)}
                placeholder="Lastname..."
            />
            <Button title="save" onPress={save} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        borderWidth: 1,
        padding: 5,
    },
})

export default Add;