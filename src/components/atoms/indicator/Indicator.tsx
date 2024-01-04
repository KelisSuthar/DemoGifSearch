import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
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

export const Indicator = ({}) => {
  return (
    <>
      <ActivityIndicator
        animating={true}
        color={colors.red}
        size={'large'}
        style={styles.indicator}
      />
    </>
  );
};
export const styles = StyleSheet.create({
  indicator: {
    height: getHeight(100),
    backgroundColor: 'rgba(255,255,255,0.7)',

    width: getWidth(100),
    position: 'absolute',
    shadowColor: colors.red,
  },
});
