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
  image: {
    flex: 1,
    width: Metrics.screenWidth,
  },
  // title: {
  //   flex: 1,
  //   color: AppColors.white,
  //   fontSize: 20
  // },
  homeTitle: {
    alignItems: "center",
    width: scale(128),
    height: scale(32),
    marginTop: scale(50),
    margin: 'auto'
  },
  homeLogo: {
    alignItems: "center",
  },
  text: {
    color: AppColors.white,
    fontSize: scale(40),
    fontFamily: "American Typewriter" ,
    // fontFamily: FontsFamilies.primary ,
    fontStyle: 'normal',
    // fontWeight: 'bold',
    lineHeight: scale(50)
  },
  textGroup: {
    paddingLeft: scale(40),
    paddingRight: scale(40),
    // alignItems: "left",
    justifyContent: 'center',
    paddingTop: scale(30),
  },
  readText: {
    position: 'absolute',
    left: scale(40),
    bottom: scale(80),
    flexDirection: 'row',
  },
  readFont: {
    color: AppColors.white,
    fontSize: scale(30),
    fontFamily: "Serif",
    fontStyle: "normal",
  },
  sideTabs: {
    width: scale(32),
    height: scale(32),
  }
});

export default styles;

