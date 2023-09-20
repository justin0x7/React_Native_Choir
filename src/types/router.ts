import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type IRouterParamList = {
  HomeScreen: undefined;
  DetailScreen: undefined;
  ArticleScreen: undefined;
  CommentScreen: undefined;
  CurrentChannelsScreen: undefined;
  ChatScreen: undefined;
  SearchScreen: undefined;
  ProfileScreen: undefined;
  // ExerciseScreen: { started: boolean };
};

// HomeScreen
type IHomeScreenRouteProp = RouteProp<IRouterParamList, 'HomeScreen'>;
type IHomeScreenNavigationProp = StackNavigationProp<
  IRouterParamList,
  'HomeScreen'
>;
export type IHomeScreenProps = {
  navigation: IHomeScreenNavigationProp;
  route: IHomeScreenRouteProp;
};

// DetailScreen
type IDetailScreenRouteProp = RouteProp<IRouterParamList, 'DetailScreen'>;
type IDetailScreenNavigationProp = StackNavigationProp<
  IRouterParamList,
  'DetailScreen'
>;
export type IDetailScreenProps = {
  navigation: IDetailScreenNavigationProp;
  route: IDetailScreenRouteProp;
};

// ArticleScreen
type IArticleScreenRouteProp = RouteProp<IRouterParamList, 'ArticleScreen'>;
type IArticleScreenNavigationProp = StackNavigationProp<
  IRouterParamList,
  'ArticleScreen'
>;
export type IArticleScreenProps = {
  navigation: IArticleScreenNavigationProp;
  route: IArticleScreenRouteProp;
};

// CommentScreen
type ICommentScreenRouteProp = RouteProp<IRouterParamList, 'CommentScreen'>;
type ICommentScreenNavigationProp = StackNavigationProp<
  IRouterParamList,
  'CommentScreen'
>;
export type ICommentScreenProps = {
  navigation: ICommentScreenNavigationProp;
  route: ICommentScreenRouteProp;
};

// ProfileScreen
type IProfileScreenRouteProp = RouteProp<IRouterParamList, 'ProfileScreen'>;
type IProfileScreenNavigationProp = StackNavigationProp<
  IRouterParamList,
  'ProfileScreen'
>;
export type IProfileScreenProps = {
  navigation: IProfileScreenNavigationProp;
  route: IProfileScreenRouteProp;
};

// SearchScreen
type ISearchScreenRouteProp = RouteProp<IRouterParamList, 'SearchScreen'>;
type ISearchScreenNavigationProp = StackNavigationProp<
  IRouterParamList,
  'SearchScreen'
>;
export type ISearchScreenProps = {
  navigation: ISearchScreenNavigationProp;
  route: ISearchScreenRouteProp;
};