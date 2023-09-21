import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppColors from '../config/colors';
import { scale } from '../config/dimentions';

import { useNavigation } from '@react-navigation/native';

interface Props {
  ButtonName: string;
  colors: any;
  fontColor: any
}

export const BlackButton = (props: Props) => {
  const navigation = useNavigation();

  
  return (
    <>
      <View >
        <View style={styles.buttonStyle} >
          <Text style={[styles.buttonText, {backgroundColor: props.colors, color: props.fontColor}]}>
            {props.ButtonName}
          </Text>
        </View>
      </View>

    </>
  );
};

export const DoneButton = (props: Props) => {
  const navigation = useNavigation();

  
  return (
    <>
      <View >
        <View style={styles.buttonStyle} >
          <Text style={[styles.doneText, {backgroundColor: props.colors, color: props.fontColor}]}>
            {props.ButtonName}
          </Text>
        </View>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    marginTop: scale(20),
    marginBottom: scale(40),
    // color: AppColors.white,
    // backgroundColor: AppColors.black,
    textAlign: 'center',
    borderRadius: scale(30),
    paddingLeft: scale(32),
    paddingRight: scale(32),
    paddingTop: scale(16),
    paddingBottom: scale(16),
    fontSize: scale(16),
    gap: scale(12)

  },
  doneText: {
    marginTop: scale(20),
    marginBottom: scale(40),
    // color: AppColors.white,
    // backgroundColor: AppColors.black,
    textAlign: 'center',
    borderRadius: scale(30),
    paddingLeft: scale(24),
    paddingRight: scale(24),
    paddingTop: scale(5),
    paddingBottom: scale(5),
    fontSize: scale(16),
    gap: scale(12)

  }
});
