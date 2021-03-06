import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankBlueprintNavigator from '../features/BlankBlueprint/navigator';
import AddItemBlueprintNavigator from '../features/AddItemBlueprint/navigator';
import UserProfile837Navigator from '../features/UserProfile837/navigator';
import UserProfile836Navigator from '../features/UserProfile836/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankBlueprint: { screen: BlankBlueprintNavigator },
AddItemBlueprint: { screen: AddItemBlueprintNavigator },
UserProfile837: { screen: UserProfile837Navigator },
UserProfile836: { screen: UserProfile836Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
