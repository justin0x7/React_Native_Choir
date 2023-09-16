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
  Content: {
    flex: 1,
    width: Metrics.screenWidth,
  },
  homeTitle: {
    alignItems: "center",
    width: scale(128),
    height: scale(32),
    marginTop: scale(50),
    margin: 'auto'
  },
  homeLogo: {
    alignItems: "center",
    marginBottom: scale(20)
  },
  articleSubject: {
    paddingTop: scale(30),
    paddingBottom: scale(30),
    fontSize: scale(25),
    marginLeft: scale(30),
    marginRight: scale(30),
    fontWeight: '500',
    color: AppColors.black
  },
  articleContent: {
    fontSize: scale(15),
    marginLeft: scale(30),
    marginRight: scale(65),
    lineHeight: scale(20),
    color: AppColors.black
  }
});

export default styles;

