import React from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import CenteredTitleComponent from '../components/CenteredTitleComponent';
import {SearchFieldComponent} from '../components/SearchFieldComponent';


/**
 * This view represents the search for city feature, where the user will be able to 
 * search for a city and move into a detailed view of that city
 * 
 * @param {*title The title for the view} props 
 * @param {*searchHandler(search) function that is called when searchbutton is pressed} props 
 * @returns SearchByCityView component
 */
export function SearchByCityView(props) {
    return (
        <View style={styles.container}>
            {/* Top component with back button */}
            <View style={styles.top}>
                {/** Back button */}
                <TouchableWithoutFeedback onPress={()=> console.log("Back")}>
                    <Image style={styles.arrow} source={require('../../assets/Arrow.jpg')} ></Image>
                </TouchableWithoutFeedback>

                {/** App title */}
                <Text style={styles.appTitle}>CityPop</Text>
            </View>

            {/** Centered main title */}
            <CenteredTitleComponent title={props.title}/>

            {/** Search component */}
            <SearchFieldComponent style={styles.buttonContainer} searchHandler={(search) => props.searchHandler(search)}/>
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
    buttonContainer:{
        flex:0.6,
    }

})  

export default SearchByCityView;