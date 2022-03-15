import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WideListButton from '../components/WideListButton';

export function SearchByCityView(props) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Search by City</Text>
            </View>
            <View style={styles.buttonContainer}>
                <WideListButton text="hej" handler={()=> console.log("pressed")}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    top:{
        flex:0.1,

    },
    titleContainer:{
        flex:0.2,
        justifyContent: 'center',
        
    },
    title:{
        textAlign:'center',
        fontSize: 30,
    },
    buttonContainer:{
        flex:0.7,
        alignItems: 'center'

    }
})  

export default SearchByCityView;