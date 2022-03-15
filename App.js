import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeView} from './src/views/HomeView';
import {SearchByCityView} from './src/views/SearchByCityView'

import screens from './src/config/screens';
import CityListView from './src/views/CityListView';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/** Home Screen */}
        <Stack.Screen name={screens.Home} component={HomeView} options={{headerShown: false}}/>

        {/** Search City Screen */}
        <Stack.Screen 
          name={screens.SearchCityView} 
          component={SearchByCityView} 
          options={{title:"CityPop"}}  
          initialParams={{
            title: "SEARCH BY CITY", 
            searchWindow: screens.CityDetails
          }}
        />

        {/** Search Country Screen */}
        <Stack.Screen 
          name={screens.SearchCountryView} 
          component={SearchByCityView} 
          options={{title:"CityPop"}} 
          initialParams={{
            title: "SEARCH BY COUNTRY", 
            searchWindow: screens.SearchCountry
          }}
        />

        {/** City List View */}
        <Stack.Screen 
          name={screens.SearchCountry} 
          component={CityListView} 
          options={{title:"CityPop"}} 
          initialParams={{
            
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  
}


