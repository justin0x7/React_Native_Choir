import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import AppColors from '../config/colors';
import { Metrics, scale } from '../config/dimentions';

import VectorUp from '../assets/images/GoBack.svg';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Cross from '../assets/images/Cross.svg';

interface Props {
  visible: any;
  onPress: any;
  onBusiness: any;
  onSports: any;
  onCulture: any;
  onWorld: any;
  onUSA: any;
  // onRequestClose: any;
  // onOutsidePress: any;
}

const CategoryModal = (props: Props) => {
    // const isFocused = useIsFocused();

    // const [refreshKey, setRefreshKey] = useState(0);
  
    // useEffect(() => {
    //   if (isFocused) {
    //     // Increment the refresh key to trigger a screen refresh
    //     // setModalVisible(false);
    //     setRefreshKey(prevKey => prevKey + 1);
    //   }
    // }, [isFocused]);
    
    return (
        <>
           <Modal visible={props.visible} animationType="fade" transparent={true} >
           {/* <TouchableWithoutFeedback onPress={props.onOutsidePress}> */}
                <View style={styles.modal}>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={props.onPress} >
                    <Text style={styles.cross}>
                        <Cross width={25} height={25} />
                    </Text>
                </TouchableOpacity>
                <View style={styles.modalContent}>
                    <TouchableOpacity activeOpacity={0.5} onPress={props.onBusiness}>
                        <Text style={styles.text}>Business</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={props.onSports}>
                        <Text style={styles.text}>Sports</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={props.onCulture}>
                        <Text style={styles.text}>Culture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={props.onWorld}>
                        <Text style={styles.text}>World</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={props.onUSA}>
                        <Text style={styles.text}>USA</Text>
                    </TouchableOpacity>
                </View>
                {/* </TouchableWithoutFeedback> */}
            </Modal>

        </>
    );
};
export default CategoryModal;

const styles = StyleSheet.create({
  background: {
      backgroundColor: AppColors.black,
      flexDirection: 'row',
      justifyContent: "space-between",
      paddingLeft: scale(30),
      paddingRight: scale(30),
      paddingTop: scale(10),
      paddingBottom: scale(5),
  },
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
      backgroundColor: AppColors.white,
      width: scale(300),
      height: scale(401),
      borderRadius: scale(50),
      paddingTop: scale(30),
  },
  text: {
      color: AppColors.black,
      fontSize: scale(45),
      lineHeight: scale(65),
      textAlign: 'left',
      paddingLeft: scale(50),
      fontFamily: 'DM Serif Text',
      fontStyle: 'normal'
  },
  cross: {
      color: AppColors.white,
      fontSize: scale(30),
      position: 'absolute',
      top: scale(70),
      right: scale(70)
  }
});
