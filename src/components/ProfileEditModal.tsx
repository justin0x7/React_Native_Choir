import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import AppColors from '../config/colors';
import { Metrics, scale } from '../config/dimentions';

import VectorUp from '../assets/images/GoBack.svg';
import { useNavigation } from '@react-navigation/native';
import Cross from '../assets/images/Cross.svg';
import { Divider } from 'react-native-paper';

interface Props {
  visible: any;
  onClose: any;
  onPrivacy: any;
  onEdit: any;
  onFollower: any;
  onFollowing: any;
  
}

const ProfileSetting = (props: Props) => {
    
    return (
        <>
           <Modal visible={props.visible} animationType="fade" transparent={true} >
           {/* <TouchableWithoutFeedback onPress={props.onOutsidePress}> */}
                <View style={styles.modal}>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={props.onClose} >
                    <Text style={styles.cross}>
                        <Cross width={25} height={25} />
                    </Text>
                </TouchableOpacity>
                <View style={styles.modalContent}>
                    <TouchableOpacity activeOpacity={0.5} onPress={props.onPrivacy}>
                        <Text style={styles.text}>Privacy</Text>
                    </TouchableOpacity>
                    <Divider style={{ borderColor: AppColors.black }} bold={true} />
                    <TouchableOpacity activeOpacity={0.5} onPress={props.onEdit}>
                        <Text style={styles.text}>Edit profile</Text>
                    </TouchableOpacity>
                    <Divider bold={true} />
                    <TouchableOpacity activeOpacity={0.5} onPress={props.onFollower}>
                        <Text style={styles.text}>Followers</Text>
                    </TouchableOpacity>
                    <Divider bold={true} />
                    <TouchableOpacity activeOpacity={0.5} onPress={props.onFollowing}>
                        <Text style={styles.text}>Following</Text>
                    </TouchableOpacity>
                </View>
                {/* </TouchableWithoutFeedback> */}
            </Modal>

        </>
    );
};
export default ProfileSetting;

const styles = StyleSheet.create({
 
  houseStyle: {
      width: scale(32),
      height: scale(32),
  },
  modal: {
      // alignSelf: 'center',
      // alignItems: 'center',
      // justifyContent: 'center',
      position: 'absolute',
      backgroundColor: AppColors.white,
      opacity: 0.5,
      width: Metrics.screenWidth,
      height: Metrics.screenHeight - scale(40)
  },
  modalContent: {
      position: 'absolute',
      left: scale(40),
      top: scale(120),
      backgroundColor: AppColors.darkgray,
      width: scale(300),
      borderRadius: scale(50),
      paddingTop: scale(20),
      paddingBottom: scale(20),
      // alignItems: 'center'
  },
  text: {
      color: AppColors.black,
      fontSize: scale(24),
      lineHeight: scale(65),
      textAlign: 'center',
      fontFamily: 'DM Serif Text',
      fontStyle: 'normal',
      
  },
  cross: {
      color: AppColors.white,
      fontSize: scale(30),
      position: 'absolute',
      top: scale(70),
      right: scale(70)
  }
});
