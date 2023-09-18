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
    paddingBottom: scale(250)
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
    paddingRight: scale(30)
  },
  commmentMessages: {
    marginTop: scale(5),
    backgroundColor: AppColors.gray,
    padding: scale(10),
    borderRadius:scale(20)
  },
  commentOwner: {
    justifyContent: 'center',
    paddingLeft: scale(10)
  },
  hearts: {
    paddingLeft: scale(10),
    paddingTop: scale(5),
    flexDirection: 'row',
  },
  heartsSum: {
    position: 'relative',
    bottom: scale(3),
    left: scale(10)
  },
  sendMessage: {
    marginTop: scale(5),
    // height: scale(150),
    borderColor: AppColors.black,
    borderWidth: scale(1),
    margin: scale(25),
    borderRadius:scale(20)
  }
});

export default styles;

