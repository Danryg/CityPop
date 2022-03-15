import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeView} from './src/views/HomeView';
import {SearchByCityView} from './src/views/SearchByCityView'

import screens from './src/config/screens';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name={screens.Home} component={HomeView}/>
        <Stack.Screen name={screens.SearchCityView} component={SearchByCityView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
