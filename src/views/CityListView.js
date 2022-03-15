import React from 'react';
import { View, StyleSheet , FlatList} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import CenteredTitleComponent from '../components/CenteredTitleComponent';
import CountryListItem from '../components/CountryListItem';


const DATA = [
    {
      id: '1',
      title: 'Paris',
    },
    {
      id: '2',
      title: 'thing2',
    },
    {
      id: '3',
      title: 'thing3',
    },
  ];


const CityListView = () =>{
    const renderItem = ({ item }) => (
        <CountryListItem name={item.title} />
    );
    return (
        <View style={styles.content}>
            <CenteredTitleComponent title="Country name"/>
            <View style={styles.cityList}>
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor= {item => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        
    },
    cityList:{
        flex:1,
        alignItems:'center',

    }
})

export default CityListView;