import {
  ActivityIndicator,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';

import {
  colors,
  fonts,
  getHeight,
  getWidth,
} from '../../../utils/constants/appConstants';

export const Indicator = ({visible, ...props}) => {
  return (
    <>
      <ActivityIndicator
        animating={false}
        color={colors.red}
        style={{
          height: getHeight(100),
          backgroundColor: 'rgba(255,255,255,0.7)',

          width: getWidth(100),
          position: 'absolute',
          shadowColor: colors.red,
        }}></ActivityIndicator>
    </>
  );
};
