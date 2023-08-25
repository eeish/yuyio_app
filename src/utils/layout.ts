import { Dimensions } from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

const layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width <= 375 || height <= 667,
  // Spare space between bottom edge & its closest component
  sparePaddingBottom: 16,
};

export default layout;
