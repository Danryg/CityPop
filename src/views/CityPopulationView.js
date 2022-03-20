import React, { Component } from 'react';

import { View, StyleSheet, Text, Alert } from 'react-native';
import CenteredTitleComponent from '../components/CenteredTitleComponent';
import {getPopulationFromCity} from '../helper/populationAPI';
import formatter from '../utils/formatter';

/**
 * City population view, this is the view that shows the user the population of a city
 */
export class CityPopulationView extends Component {

    state={
        cityname: "Loading...",
    }

    constructor(props){
        super();
        this.initiatePopulation(props.route.params.searchword);
    }

    render(){
        return (
            <View style={styles.container}>
                <CenteredTitleComponent title={this.state.cityname}/>
                {this.getPopulation()}
            </View>
        );
    }

    getPopulation(){

        if(this.state.population == null){
            return;
        }
        return <View style={styles.populationBox}>
                    <Text style={styles.populationTitle}>POPULATION</Text>
                    <Text style={styles.populationNumber}>{this.state.population}</Text>
                </View>;
    }

    /**
     * Initiates all the data that will be displayed
     * @param {*cityname name of the city in which population should be displayed} city 
     */
    initiatePopulation = async (cityName) =>{

        
        var cityPopulation = await getPopulationFromCity(cityName);

        if(cityPopulation == "error"){
            this.props.navigation.goBack();
            Alert.alert("City does not exist", "Check for spelling error");
            return;
        }


        cityPopulation = Math.round(cityPopulation);
        cityPopulation = formatter.formatPopulationNumber(cityPopulation);
        var title = cityName.toUpperCase();
        this.setState({cityname: title, population: cityPopulation});
    }

    
}
export default CityPopulationView;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor: "white",
        
    },
    populationBox:{
        marginTop:50,
        width: "90%",
        height: 100,
        borderWidth:1,
        alignItems: 'center'
    },
    populationTitle:{
        fontSize:10
    },
    populationNumber:{
        fontSize: 40
    }
})

