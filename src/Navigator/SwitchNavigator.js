import {createSwitchNavigator} from 'react-navigation' 
import StackApp from './StackApp';
import Home from '../screens/Home'

const SwitchNavigator = createSwitchNavigator ({
    Home: {screen: Home},
    StackApp : {screen: StackApp},

})

export default SwitchNavigator;