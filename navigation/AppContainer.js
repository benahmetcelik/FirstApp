import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';
import FilmsScreen from '../screens/films';



const Stack = createStackNavigator();

const AppNavigationContainer = () => {

  //const userInformation  = useContext(LoginControllerContext);

  defaultNavigationOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
  };


  return (
 
    
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Films" component={FilmsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigationContainer;
