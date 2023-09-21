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
    // paddingBottom: scale(260)
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
    color: AppColors.black,
    paddingBottom: scale(20)
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
    height: scale(40),
    borderRadius: scale(20)
  },
  privacyStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: scale(260)
  },
  privacyHeader: {
    fontSize: scale(30),
    color: AppColors.black,
    paddingBottom: scale(20)
  },
  privacyContent: {
    fontSize: scale(16),
    color: AppColors.black,
    // textAlign: 'center',
    justifyContent: 'center',
    paddingLeft: scale(20),
    paddingRight: scale(20),
    alignItems: 'center'
  },
  privacySub: {
    alignItems: 'center'

  },
  passwordHeader: {
    fontSize: scale(24),
    color: AppColors.black,
    paddingBottom: scale(40),
    marginTop: scale(40),
  },
  passwordChange: {
    borderWidth: scale(1),
    borderRadius: scale(20),
    height: scale(34),
    width: scale(236),
    paddingLeft: scale(20),
  },
  passwordBox: {
    paddingBottom: scale(18)
  },
  userName: {
    fontSize: scale(24),
    color: AppColors.black,
    textAlign: 'center'
  },
  nickName: {
    fontSize: scale(18),
    color: AppColors.black,
    textAlign: 'center'
  }
});

export default styles;

