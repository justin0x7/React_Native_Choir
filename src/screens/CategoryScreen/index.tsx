import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider, Searchbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { store, type RootState } from '../../store';
import { readUserData } from '../../store/slices/user.slice';
import { readArticleData } from '../../store/slices/article.slice';
import Footer from '../../components/Footer';
import { UserType } from '../../types/common';
import { ICategoryScreenProps } from '../../types/router';
import styles from "./styles";
import GoToPrev from '../../components/GoToPrev';
import { testArticleData } from '../../assets/testData';
import AppColors from '../../config/colors';
import { useIsFocused } from '@react-navigation/native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import { useWindowDimensions } from 'react-native';

const CategoryScreen: React.FC<ICategoryScreenProps> = ({ navigation, route }) => {
  const userData = useSelector((state: RootState) => state.user.userData)
  const articleData = useSelector((state: RootState) => state.article.articleData)
  const dispatch = store.dispatch

  const [toggleTab, setToggleTab] = useState('');
  const SetToggleArticles = () => {
    setToggleTab('Articles');
  }

  const SetToggleUsers = () => {
    setToggleTab('Users');
  }

  useEffect(() => {
    dispatch(readUserData())
    dispatch(readArticleData())
  }, [])

  const onPressGotoHome = () => {
    console.log('on press goto HomeScreen');
    navigation.navigate("HomeScreen");
  }

  const onPressGotoProfile = () => {
    console.log('on press goto ProfileScreen');
    navigation.navigate("ProfileScreen");
  }

  const { page } = route.params;

  // const FirstRoute = () => (
  //     // <View style={{ backgroundColor: 'white' }} />
  //     <Text style={styles.Tab}>

  // </Text>
  // );

  // const SecondRoute = () => (
  //     <View style={{ backgroundColor: 'white' }} />
  // );

  // const renderScene = SceneMap({
  //     first: FirstRoute,
  //     second: SecondRoute,
  // });
  const onPressGotoSearch = () => {
    navigation.navigate("SearchScreen");
  }

  const onGoToCategory = (page: string) => {
    console.log('on press goto Business');
    navigation.navigate("CategoryScreen", { page });
  }

  const categoryName: string = String(page);

  // const layout = useWindowDimensions();

  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //     { key: 'first', title: 'Articles' },
  //     { key: 'second', title: 'Users' },
  // ]);

  const colors = [AppColors.blue, AppColors.yellow, AppColors.blue, AppColors.lightblue];

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.content}>
          <View style={styles.searchTitle}>
            <Text style={styles.searchSubject}>
              {page}
            </Text>
          </View>
          <ScrollView>
            <View style={styles.arrayImage}>
              {articleData.map((item) => (
                item.category === categoryName && <View style={styles.imageCard}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={[styles.imageText, { backgroundColor: colors[Math.floor(Math.random() * colors.length)] }]}>{item.description}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <GoToPrev />
      <Footer
        onSearch={onPressGotoSearch}
        onHome={onPressGotoHome}
        onProfile={onPressGotoProfile}
        onGoToBusiness={() => onGoToCategory('Business')}
        onCulture={() => onGoToCategory('Culture')}
        onSports={() => onGoToCategory('Sports')}
        onUSA={() => onGoToCategory('USA')}
        onWorld={() => onGoToCategory('World')}
      />
    </>
  );
}

export default CategoryScreen;