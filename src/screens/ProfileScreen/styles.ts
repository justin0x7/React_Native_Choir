import { StyleSheet } from 'react-native';
import AppColors from '../../config/colors';
import { Metrics, scale } from '../../config/dimentions';
import { FontsFamilies } from '../../config/fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    width: Metrics.screenWidth,
    paddingBottom: scale(90)
  },
  searchTitle: {
    alignItems: "center",
  },
  searchSubject: {
    paddingTop: scale(30),
    paddingBottom: scale(30),
    fontSize: scale(25),
    marginLeft: scale(30),
    marginRight: scale(30),
    fontWeight: '500',
    color: AppColors.black
  },
  profileSection: {
    justifyContent: 'center'
  },
  userId: {
    textAlign: 'center',
    color: AppColors.black
  },
  tabTitle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  articles: {
    fontSize: scale(15),
    textAlign: 'center',
    fontWeight: 'bold'
  },
  users: {
    fontSize: scale(15),
    textAlign: 'center',
    fontWeight: 'bold'
  },
  articleLine: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingLeft: scale(40),
    paddingRight: scale(40),
    paddingTop: scale(30),
    paddingBottom: scale(30),
  },
  articleText: {
    justifyContent: 'center',
    paddingLeft: scale(40),
  },
  userLine: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingLeft: scale(70),
    paddingRight: scale(90),
    paddingTop: scale(10),
    paddingBottom: scale(10),
  },
  usersText: {
    justifyContent: 'center',
    paddingLeft: scale(120),
  },
  imageSize: {
    width: scale(40),
    height: scale(40)
  },
});

export default styles;

