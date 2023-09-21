import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Footer from '../../components/Footer';
import SideMenu from '../../components/SideMenu';
import { IHomeScreenProps } from '../../types/router';
import styles from "./styles";
const homeImage = require('../../assets/images/Home.png');
const homeTitle = require('../../assets/images/HomeTitle.png');


const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation, route }) => {
  const onPressGotoArticle = () => {
    console.log('on press goto ArticleScreen');
    navigation.navigate("ArticleScreen");
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

  return (
    <>
      <View style={styles.mainContainer}>
        <ImageBackground source={homeImage} resizeMode="cover" style={styles.image}>
          <View style={styles.homeLogo}>
            <Image
              style={styles.homeTitle}
              source={homeTitle}
            />
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.text}>Medieval Moon
              Observations Reveal
              ‘Mysterious’ Volcanic
              Eruptions
            </Text>
          </View>

          <View>
          </View>
          <View style={styles.readText}>
            <TouchableOpacity activeOpacity={0.5} onPress={onPressGotoArticle}>
              <Text style={styles.readFont}>Read more</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* <Button
        onPress={onPressGotoDetail}
        title="Go to detail"
        color="#841584"
      /> */}
      </View>
      <SideMenu
        onComment={onPressGotoComments}
        color='white'
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