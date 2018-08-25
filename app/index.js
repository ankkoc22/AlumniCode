import {createStackNavigator} from 'react-navigation';
import HomeScreen from "./components/home-screen";
import ProfileScreen from "./components/profile-screen";

export default AlumniConnect = createStackNavigator({
    HomeScreen: {screen: HomeScreen},
    ProfileScreen: {screen: ProfileScreen}
})