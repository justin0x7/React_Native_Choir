import { StyleSheet } from 'react-native';
import AppColors from '../../config/colors';
import { Metrics, scale } from '../../config/dimentions';
import { FontsFamilies } from '../../config/fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: 'center'
  },
  Content: {
    flex: 1,
    width: Metrics.screenWidth,
    // marginTop: scale(30)
  },
  homeTitle: {
    alignItems: "center",
    width: scale(128),
    height: scale(32),
    marginTop: scale(50),
    margin: 'auto'
  },
  CommentTitle: {
    alignItems: "center",
  },
  commentSubject: {
    paddingTop: scale(30),
    paddingBottom: scale(30),
    fontSize: scale(25),
    marginLeft: scale(30),
    marginRight: scale(30),
    fontWeight: '500',
    color: AppColors.black
  },
  articleSubject: {
    paddingBottom: scale(30),
    paddingLeft: scale(30),
    fontSize: scale(25),
    fontWeight: '500',
    color: AppColors.black
  },
  articleContent: {
    fontSize: scale(15),
    marginLeft: scale(30),
    marginRight: scale(65),
    lineHeight: scale(20),
    color: AppColors.black
  },
  commentProfile: {
    flexDirection: 'row'
  },
  commentAvatar: {
    justifyContent: 'center',
    width: scale(27),
    height: scale(27)
  },
  commentContent: {
    paddingLeft: scale(30),
    paddingRight: scale(30),
    paddingTop: scale(30)
  },
  commentSubContent: {
    paddingLeft: scale(70),
    paddingRight: scale(50),
    paddingTop: scale(30)
  },
  commmentMessages: {
    marginTop: scale(5),
    backgroundColor: AppColors.gray,
    padding: scale(10),
    borderRadius:scale(20),
  },
  fontColor: {
    color: AppColors.black
  },
  commentOwner: {
    justifyContent: 'center',
    paddingLeft: scale(10),
    color: AppColors.black
  },
  hearts: {
    paddingLeft: scale(10),
    paddingTop: scale(5),
    flexDirection: 'row',
  },
  heartsSum: {
    position: 'relative',
    bottom: scale(3),
    left: scale(10),
    color: AppColors.black
  },
  sendMessage: {
    marginTop: scale(5),
    // height: scale(150),
    borderColor: AppColors.black,
    borderWidth: scale(1),
    margin: scale(25),
    borderRadius:scale(20)
  },
  replyMessage: {
    marginTop: scale(5),
    // height: scale(150),
    borderColor: AppColors.black,
    borderWidth: scale(1),
    marginLeft: scale(50),
    marginBottom: scale(5),
    borderRadius:scale(20),
    width: scale(250),
    height:scale(40),
    paddingLeft: scale(10)
  },
  sendMessageIcon: {
    position:'absolute',
    bottom: scale(5),
    right: scale(5)
  },
  dots: {
    position: 'absolute',
    right: scale(15),
    top: scale(6)
  },
  options: {
    position: 'absolute',
    right: scale(10),
    top: scale(-45),
    borderWidth: scale(1),
    borderColor: AppColors.black,
    paddingLeft: scale(15),
    paddingRight: scale(15),
    paddingBottom: scale(2),
    paddingTop: scale(2),
    borderRadius: scale(10),
  },
  options1: {
    position: 'absolute',
    right: scale(10),
    top: scale(-30),
    borderWidth: scale(1),
    borderColor: AppColors.black,
    paddingLeft: scale(15),
    paddingRight: scale(15),
    paddingBottom: scale(2),
    paddingTop: scale(2),
    borderRadius: scale(10),
  },
  delete: {
    color: AppColors.red,
  },
  footerContainer: {
    flex: 1,
  }
});

export default styles;

