import React from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import WideTextInput from '../components/WideTextInput';

export function SearchByCityView(props) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableWithoutFeedback onPress={()=> console.log("Back")}>
                    <Image style={styles.arrow} source={require('../../assets/Arrow.jpg')} ></Image>
                </TouchableWithoutFeedback>
                
                <Text style={styles.appTitle}>CityPop</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Search by City</Text>
            </View>
            <View style={styles.buttonContainer}>
                <WideTextInput  placeholder ='Enter a City '/>
                <View  style={styles.searchButtonContainer}>
                    <Image style={styles.searchButton} source={require('../../assets/SearchIcon.png')}></Image>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    top:{
        flex:0.07,
        flexDirection: 'row',
        alignItems: 'center',

    },
    arrow:{
        width: 50,
        height: 50,
        transform: [{ rotate: '180deg' }],
        marginLeft: 10
    },
    appTitle:{
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 20
    },
    titleContainer:{
        flex:0.3,
        justifyContent: 'center',
        
    },
    title:{
        textAlign:'center',
        fontSize: 30,
    },
    buttonContainer:{
        flex:0.6,
        alignItems: 'center'

    },
    searchButtonContainer:{
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",

        elevation: 7,
    },
    searchButton:{
        width: 30,
        height: 30,

    }

})  

export default SearchByCityView;