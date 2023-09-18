/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import ArticleScreen from './screens/Articles';
import CommentScreen from './screens/Comments';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/Search"
import CurrentChannelsScreen from "./screens/Channels"
import { store } from './store';
import { IRouterParamList } from './types/router';

const Stack = createNativeStackNavigator<IRouterParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ArticleScreen"
            component={ArticleScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CommentScreen"
            component={CommentScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          {/* Message Chat */}
          {/* <Stack.Screen
            name="CurrentChannelsScreen"
            component={CurrentChannelsScreen}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={({ navigation }) => ({
              title: currentChannel?.name || "Chat",
              headerBackTitle: "",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Members")}>
                  <Octicons name="people" size={24} color={isDark ? "#fff" : "#2a2a39"} />
                </TouchableOpacity>
              ),
            })}
          /> */}
          {/* <Stack.Screen
            name="Members"
            component={ChannelMembersScreen}
            options={{
              title: currentChannel?.name || "Members",
              headerBackTitle: "",
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
