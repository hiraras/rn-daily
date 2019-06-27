import { createStackNavigator, createAppContainer } from "react-navigation";
import Index from './Index';
import Home from './Home';

const AppNavigator = createStackNavigator({
  Index: { screen: Index },
  Home: { screen: Home }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: null,
    headerStyle: {
      backgroundColor: '#0B60CE',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
      textAlign: 'center'
    }
  }
}); 

export default createAppContainer(AppNavigator);
