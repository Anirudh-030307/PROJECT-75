import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import Login from './screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {
    screen: WriteStoryScreen,
    navigationOptions: {
      tabBarIcon: <Image style={{ width: 40, height: 40, }}
        source={require("./assets/write.png")} />,
      tabBarLabel: "WRITE STORY"
    }
  },
  ReadStory: {
    screen: ReadStoryScreen,
    navigationOptions: {
      tabBarIcon: <Image style={{ width: 40, height: 40, }}
        source={require("./assets/read.png")} />,
      tabBarLabel: "READ STORY"
    }
  },
})

const SwitchNavigator = createSwitchNavigator({
  Login: Login,
  TabNavigator: TabNavigator
})

const AppContainer = createAppContainer(SwitchNavigator);