import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native";

function Search ({executeSearch}) {
    const [search, setSearch] = useState('');

    return (
        <View style= {styles.searchBox}>
            <TextInput
            value = {search}
            onChangeText={text =>setSearch(text)}
            placeholder="search..."
            returnKeyType="search"
            onSubmitEditing={() => executeSearch(search)}
            />
        </View>
      );
}

const styles = StyleSheet.create({
    searchBox: {
        marginBottom: 20,
        borderColor: '#333',
        borderWidth: 1,
        padding: 5,
    }
})

export default Search ;