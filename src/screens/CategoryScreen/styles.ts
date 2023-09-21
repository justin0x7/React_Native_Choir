import {StyleSheet} from 'react-native';
import AppColors from '../../config/colors';
import {Metrics, scale} from '../../config/dimentions';
import {FontsFamilies} from '../../config/fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: Metrics.screenWidth,
    // paddingBottom: scale(90),
  },
  searchTitle: {
    alignItems: 'center',
  },
  searchSubject: {
    paddingTop: scale(30),
    paddingBottom: scale(30),
    fontSize: scale(25),
    marginLeft: scale(30),
    marginRight: scale(30),
    fontWeight: '500',
    color: AppColors.black,
  },
  searchBar: {
    paddingBottom: scale(40),
    paddingLeft: scale(10),
    paddingRight: scale(10),
  },
  tabTitle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  articles: {
    fontSize: scale(15),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  users: {
    fontSize: scale(15),
    textAlign: 'center',
    fontWeight: 'bold',
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
    height: scale(40),
  },
  arrayImage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
    width: scale(162),
    height: scale(269),
    margin: scale(10),
    borderRadius: scale(20),
  },
  imageText: {
    alignItems: "center",
    textAlign: 'center',
    width: scale(162),
    position: 'absolute',
    bottom: scale(9),
    borderBottomRightRadius: scale(20),
    borderBottomLeftRadius: scale(20),
    padding: scale(5)
  },
  imageCard: {
    alignItems: 'center'
  }
});

export default styles;
