import React,{Component} from 'react';
import { View, StyleSheet , FlatList, Alert} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import CenteredTitleComponent from '../components/CenteredTitleComponent';
import CountryListItem from '../components/CountryListItem';
import screens from '../config/screens';
import { getCitiesInCountry } from '../helper/populationAPI';



/**
 * View that shows a list of cities from a given country
 * @param {Countryname given by parameter in navigate function} props.route.params
 */
export class CityListView extends Component{

    state={
        cities: []
    }

    constructor(props){
        super();
        this.initiate(props.route.params.searchword);
        this.render();
    }
    render(){
        const renderItem = ({ item }) => (
            <CountryListItem name={item.citie} onPressHandler={(citie)=> this.showPopulation(citie)} />
        );
        return (
            <View style={styles.content}>
                
                <CenteredTitleComponent title={this.state.countryName}/>
                <View style={styles.cityList}>
                    <FlatList 
                        data={this.state.cities}
                        renderItem={renderItem}
                        keyExtractor= {item => item.id}
                    />
                </View>
            </View>
        );
    }


    /**
     * Navigates to city population view and shows the population of a given city
     * @param {cityname name of city that should be displayed} citie 
     */
    showPopulation(citie){
        this.props.navigation.navigate(screens.CityDetails, {searchword: citie});
    }


    /**
     * Initiates the data that will be displayed
     * @param {*Countryname name of the country that will be used to fetch cities and display the title} name 
     * @returns 
     */
    initiate = async (name) =>{
        var arr = await getCitiesInCountry(name);

        var title = name.toUpperCase();
        this.setState({countryName: title});
        if(arr == undefined){
            console.log("error");

            this.props.navigation.goBack();
            Alert.alert("Country does not exist", "Check for spelling errors");

            return;
        }
       for(var i = 0; i< 10 ;i++){
            var citie = {id: i, citie: arr[i].city};
            
            this.setState({cities:[... this.state.cities, citie ]});
            
        }
        
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1,

        backgroundColor: "white",
        
    },
    cityList:{
        flex:1,
        alignItems:'center',
        marginBottom: 50

    }
})

export default CityListView;