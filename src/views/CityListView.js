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
      id: '4',
      title: 'thing3',
    },
    {
      id: '5',
      title: 'thing3',
    },
    {
      id: '6',
      title: 'thing3',
    },{
      id: '7',
      title: 'thing3',
    },
    {
      id: '8',
      title: 'thing3',
    },
    {
      id: '9',
      title: 'thing3',
    },
    {
      id: '10',
      title: 'thing3',
    },
    {
      id: '11',
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
        marginBottom: 50

    }
})

export default CityListView;