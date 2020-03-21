import {createStackNavigator} from 'react-navigation'
import Home from '../screens/Home'
import Details from '../screens/Details'


const StackApp = createStackNavigator ({
    Home: { screen: Home },
    Details: { screen: Details }
})

export default StackApp