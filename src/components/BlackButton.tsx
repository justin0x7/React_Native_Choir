import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppColors from '../config/colors';
import { scale } from '../config/dimentions';

import { useNavigation } from '@react-navigation/native';

interface Props {
  ButtonName: string
}

const BlackButton = (props: Props) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <View >
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5} onPress={goBack}>
          <Text style={styles.buttonText}>
            {props.ButtonName}
          </Text>
        </TouchableOpacity>
      </View>

    </>
  );
};
export default BlackButton;

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    marginTop: scale(20),
    marginBottom: scale(40),
    color: AppColors.white,
    backgroundColor: AppColors.black,
    textAlign: 'center',
    borderRadius: scale(30),
    paddingLeft: scale(32),
    paddingRight: scale(32),
    paddingTop: scale(16),
    paddingBottom: scale(16),
    fontSize: scale(16),
    gap: scale(12)

  }
});
