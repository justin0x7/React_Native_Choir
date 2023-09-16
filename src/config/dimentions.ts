import {PixelRatio, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidePadBaseWidth = 520;

const isWideDevice = () => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
};

export const scale = (size: number) => {
  const baseWidth = isWideDevice() ? guidePadBaseWidth : guidelineBaseWidth;
  const shorterWindowDimension = width > height ? height : width;
  return Math.floor((shorterWindowDimension / baseWidth) * size * 100) / 100;
};

export const Metrics = {
  screenWidth: width,
  screenHeight: height,
  defaultPadding: scale(16)
};
