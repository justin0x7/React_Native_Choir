import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppColors from '../config/colors';
import { scale } from '../config/dimentions';

import VectorUp from '../assets/images/GoBack.svg';
import { useNavigation } from '@react-navigation/native';

interface Props {
  
}

const GoToPrev = (props: Props) => {
    const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
    return (
        <>
            <View style={styles.backIcon}>
                <TouchableOpacity activeOpacity={0.5} onPress={goBack}>
                    <VectorUp width={40} height={20} />
                </TouchableOpacity>
            </View>

        </>
    );
};
export default GoToPrev;

const styles = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        left: scale(30),
        top: scale(40)
    },
    message: {
    }
});
