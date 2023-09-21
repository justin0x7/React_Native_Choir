import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Footer from '../../components/Footer';
import SideMenu from '../../components/SideMenu';
import { IHomeScreenProps } from '../../types/router';
import styles from "./styles";
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import store, { RootState } from '../../store';
import { readCommentData } from '../../store/slices/comment.slice';
import { readUserData } from '../../store/slices/user.slice';
import { readArticleData } from '../../store/slices/article.slice';
const homeImage = require('../../assets/images/Home.png');
const homeTitle = require('../../assets/images/HomeTitle.png');


const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation, route }) => {
  const articleData = useSelector((state: RootState) => state.article.articleData)
  const userData = useSelector((state: RootState) => state.user.userData)
  const dispatch = store.dispatch
  useEffect(() => {
    dispatch(readUserData())
    dispatch(readArticleData())
  }, [])

  const onPressGotoArticle = (title: string, content: string) => {
    console.log('on press goto ArticleScreen');
    navigation.navigate("ArticleScreen", { title, content });
  }

  const onPressGotoComments = () => {
    console.log('on press goto CommentScreen');
    navigation.navigate("CommentScreen");
  }

  const onPressGotoSearch = () => {
    console.log('on press goto SearchScreen');
    navigation.navigate("SearchScreen");
  }

  const onPressGotoHome = () => {
    console.log('on press goto HomeScreen');
    navigation.navigate("HomeScreen");
  }

  const onPressGotoProfile = () => {
    console.log('on press goto ProfileScreen');
    navigation.navigate("ProfileScreen");
  }

  const onGoToCategory = (page: string) => {
    console.log('on press goto Business');
    navigation.navigate("CategoryScreen", { page });
  }

  const groupedData = articleData.reduce((acc: any, item: any) => {
    acc[item.category] = [...(acc[item.category] || []), item];
    return acc;
  }, {});

  const latestItems = Object.values(groupedData).map((items: any) => {
    return items.sort((a: any, b: any) => b.date - a.date)[0];
  });

  const renderItem = ({ item }: any) => {
    return (
      <>
        <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
          <View style={styles.homeLogo}>
            <Image
              style={styles.homeTitle}
              source={homeTitle}
            />
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.text}>
              {item.title}
            </Text>
          </View>

          <View>
          </View>
          <View style={styles.readText}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => onPressGotoArticle( item.title, item.content )}>
              <Text style={styles.readFont}>Read more</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </>
    );
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <FlatList
          data={latestItems}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => renderItem({ item })}
        />

        {/* <Button
        onPress={onPressGotoDetail}
        title="Go to detail"
        color="#841584"
      /> */}
      </View>
      <SideMenu
        onComment={onPressGotoComments}
        color='white'
        onToTop={''}
      />
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

export default HomeScreen;