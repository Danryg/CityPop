import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CountryListItem(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.countryName}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        width: 350,
        height: 60,
        justifyContent:'center',

        marginTop: 10
    },
    countryName:{
        textAlign:'center',
        fontSize: 20
    }
})

export default CountryListItem;