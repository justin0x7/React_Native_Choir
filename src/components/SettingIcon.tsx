import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppColors from '../config/colors';
import { scale } from '../config/dimentions';

import SettingIcons from '../assets/images/SettingIcon.svg';
import { useNavigation } from '@react-navigation/native';

interface Props {
  onShowModal: any
}

const SettingIcon = (props: Props) => {
    const navigation = useNavigation();

  
    return (
        <>
            <View style={styles.backIcon}>
                <TouchableOpacity activeOpacity={0.5} onPress={props.onShowModal}>
                    <SettingIcons width={40} height={20} />
                </TouchableOpacity>
            </View>

        </>
    );
};
export default SettingIcon;

const styles = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        right: scale(30),
        top: scale(40)
    },
    message: {
    }
});
