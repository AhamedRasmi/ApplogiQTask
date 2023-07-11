import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import React, { useState, useMemo } from 'react'

const Polls = () => {
    const [selectedId, setSelectedId] = useState();

    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Sam Billings',
            value: 'option1'
        },
        {
            id: '2',
            label: 'MS Dhoni',
            value: 'option2'
        },
        {
            id: '3',
            label: 'Joe Root',
            value: 'option3'
        }
    ]), []);

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 14, marginTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#717070' }}>Polls</Text>
                <Text style={{ color: 'blue' }}>See all</Text>
            </View>

            <View style={styles.card}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#228BE6', margin: 12, fontSize: 15, fontWeight: '500' }}>11 Votes</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderRadius: 25, borderColor: '#eee', padding: 10, backgroundColor: '#b7f6d3' }}>
                        <Text style={{ color: 'grey', fontSize: 12 }}>End of the session</Text>
                    </View>
                </View>

                <View style={{ marginHorizontal: 12, marginVertical: 6 }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#000' }}>Who will be the man of the match in the upcoming lead club vs KKR match?</Text>
                    <View style={{ marginTop: 25 }}>
                        <RadioGroup
                            radioButtons={radioButtons}
                            onPress={setSelectedId}
                            selectedId={selectedId}
                            layout='row'
                        />
                    </View>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: '#eee', padding: 12, borderRadius: 12, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: '#228BE6', fontWeight: '600' }}>Vote</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 260,
        borderRadius: 12,
        marginHorizontal: 12,
        backgroundColor: '#e6e6ea',
        marginVertical: 20
    },
})
export default Polls;