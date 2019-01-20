import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TestPage from './containers/TestPage';
import AfterTestPage from './containers/AfterTestPage';

const AppNavigator = createStackNavigator(
    {
        TestPage         : { screen : TestPage },
        AfterTestPage    : { screen : AfterTestPage }
    },
    {
        initialRouteName : 'TestPage',
        navigationOptions : {

        },
        headerMode : 'none'
    }
)

const App = createAppContainer(AppNavigator);

export default App;