import React from 'react';
import { View, Text, StyleSheet,TouchableHighlight } from 'react-native';


function CountryListItem(props) {
    return (
        <TouchableHighlight style={styles.container} onPress={()=> console.log(props.name)}>
            <Text style={styles.countryName}>{props.name}</Text>
        </TouchableHighlight>
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