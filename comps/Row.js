import { Pressable, StyleSheet, Text } from "react-native"
import React from "react"

export default function Row({ person, selectID, select }) {
    const backgroundColor = person.id === selectID ? '#ff0' : '#bcbcbc';

    return (
        <Pressable onPress={() => select(person.id)}>
            <Text
                style={[style.row, { backgroundColor }]}>
                {person.lastname}, {person.firstname}
            </Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    item: {
        fonstsize: 20,
        height: 44,
        padding: 8,
    },
    row: {
        backgroundColor : '#4b4b4b'
    }
})