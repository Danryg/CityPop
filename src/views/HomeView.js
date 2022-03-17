import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WideListButton from '../components/WideListButton';

import screens from '../../src/config/screens';
/**
 * Home page with navigation to main features
 * @returns HomeView Component
 */
export class HomeView extends Component {

    render(){
        return (
            <View style={styles.container}>
                {/** Centered title */}
                <View style={styles.titleBox}>
                    <Text style={styles.titleText}>CityPop</Text>
                </View>

                {/** Navigation buttons */}
                <View style={styles.buttonBox}>
                    <WideListButton text="SEARCH BY CITY" handler={() =>this.props.navigation.navigate(screens.SearchCityView)} />
                    <WideListButton text="SEARCH BY COUNTRY" handler={() =>this.props.navigation.navigate(screens.SearchCountryView)} />
                </View>
            </View>
        );
    }

    /**
     * Navigates to another screen
     * @param {*ENUM screen name gotten from screens.js in config}  screenName 
     */
    navigateTo = (screenName) =>{
        console.log(this.props.navigation);
        this.props.navigation.navigate(screenName);
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",
    },
    titleBox:{
        flex:0.4,
        justifyContent: 'center',
    },
    buttonBox:{
        flex:0.5,
        
        alignItems:'center'
    },
    titleText:{
        textAlign:'center',
        fontSize:40,
        fontWeight: 'bold',
    },
    
})

export default HomeView;