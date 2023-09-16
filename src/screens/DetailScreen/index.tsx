import React from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import { useSelector } from 'react-redux';
import AppColors from '../../config/colors';
import { store, type RootState } from '../../store';
import { loginRequest } from '../../store/slices/user.slice';
import styles from './styles';

const DetailScreen: React.FC = () => {
  const userName = useSelector((state: RootState) => state.user.userName)
  const dispatch = store.dispatch

  const onPressLogin = () => {
    console.log('on press login = ', userName)
    dispatch(loginRequest({userName: "JWM logged in"}))
  }

  return (
    <View style={styles.mainContainer}>
      <Text>Detail Screen</Text>
      <Text>Logged in user = {userName}</Text>
      <Button
        onPress={onPressLogin}
        title="Login"
        color={AppColors.primary}
      />
    </View>
  );
}

export default DetailScreen;