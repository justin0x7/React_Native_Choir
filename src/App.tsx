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
import ArticleScreen from './screens/ArticlesScreen';
import CommentScreen from './screens/CommentsScreen';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen"
import ProfileScreen from "./screens/ProfileScreen"
import CategoryScreen from "./screens/CategoryScreen"
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
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CategoryScreen"
            component={CategoryScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
