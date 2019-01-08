import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';


import Main from './pages/main';
import Product from './pages/product';
const navigator = createStackNavigator({
     Main,
     Product
},{
     defaultNavigationOptions:{
          headerStyle:{
               backgroundColor:"#f5f5f5"
          },
          headerTinColor:"#fff"
     },
});

const App = createAppContainer(navigator);

export default App;