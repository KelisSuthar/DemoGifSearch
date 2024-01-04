import {FC} from 'react';
import {
  Image,
  PixelRatio,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  colors,
  getHeight,
  getWidth,
  images,
} from '../../utils/constants/appConstants';

interface GifLayoutProps {
  item: any;
  index: number;
}

export const GifLayout: FC<GifLayoutProps> = ({item, index}) => {
  return (
    <View style={styles.gifParent}>
      <Image
        style={styles.gifImg}
        source={{
          uri: item.images.original.url,
        }}
      />
    </View>
  );
};
export const styles = StyleSheet.create({
  gifImg: {height: getWidth(40), margin: 10},
  gifParent: {flex: 1},
});
