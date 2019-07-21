import { createStackNavigator } from 'react-navigation';
import Campings from '../screens/main/Campings'
import Settings from '../screens/main/Settings'
export default createStackNavigator(
    {
        Campings:Campings,
        Settings: Settings
    },

    {
        initialRouteName:"Campings",
        headerMode:'none'
    }
)