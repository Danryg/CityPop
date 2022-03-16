import React,{Component} from 'react';
import { View, StyleSheet , FlatList} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import CenteredTitleComponent from '../components/CenteredTitleComponent';
import CountryListItem from '../components/CountryListItem';
import { getCitiesInCountry } from '../helper/populationAPI';


const DATA = [];


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
            <CountryListItem name={item.citie} />
        );
        return (
            <View style={styles.content}>
                
                <CenteredTitleComponent title="Country name"/>
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

    initiate = async (name) =>{
        var arr = await getCitiesInCountry(name);
        
       for(var i = 0; i< 10 ;i++){
            var citie = {id: i, citie: arr[i].city};
            
            this.setState({cities:[... this.state.cities, citie ]});
            
        }
        
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        
    },
    cityList:{
        flex:1,
        alignItems:'center',
        marginBottom: 50

    }
})

export default CityListView;