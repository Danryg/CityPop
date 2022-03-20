import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeView} from './src/views/HomeView';
import {SearchView} from './src/views/SearchView'

import screens from './src/config/screens';
import CityListView from './src/views/CityListView';
import CityPopulationView from './src/views/CityPopulationView';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions=
        {
          {
            headerShadowVisible: false,
            title: "CityPop",
            headerStyle:{
              backgroundColor: 'white',
              shadowOpacity: 0,
              elevation: 0
            }
          }
        }
      >
        {/** Home Screen */}
        <Stack.Screen name={screens.Home} component={HomeView} options={{headerShown: false}}/>

        {/** Search City Screen */}
        <Stack.Screen 
          name={screens.SearchCityView} 
          component={SearchView} 
           
          initialParams={{
            title: "SEARCH BY CITY", 
            searchWindow: screens.CityDetails,
            inputHint: "Enter a city"
          }}
        />

        {/** Search Country Screen */}
        <Stack.Screen 
          name={screens.SearchCountryView} 
          component={SearchView} 
          initialParams={{
            title: "SEARCH BY COUNTRY", 
            searchWindow: screens.SearchCountry,
            inputHint: "Enter a country"
          }}
        />

        {/** City List View */}
        <Stack.Screen 
          name={screens.SearchCountry} 
          component={CityListView} 
        />

        {/** City Population View */}
        <Stack.Screen 
          name={screens.CityDetails} 
          component={CityPopulationView} 
          
          
        />

      </Stack.Navigator>
    </NavigationContainer>
  );

  
}


