import { StyleSheet } from 'react-native';
import AppColors from '../../config/colors';
import { Metrics } from '../../config/dimentions';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.gray,
    padding: Metrics.defaultPadding,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
