
import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider } from './src/context/AppContext';
import HomeScreen from './src/Screens/HomeScreen';
import ContactScreen from './src/Screens/ContactScreen';
import TeamScreen from './src/Screens/TeamScreen';

const switchNavigator= createSwitchNavigator({
  mainFlow:createBottomTabNavigator({
    Home:createStackNavigator({
        HomeScreen:HomeScreen
    }),
    Contacto:createStackNavigator({
      ContactScreen:ContactScreen
    })
  })
});

//export default createAppContainer(switchNavigator);
const App= createAppContainer(switchNavigator);

export default () =>{
  	return(
      	<Provider>
      		<App/>
		    </Provider>
  	);
};
