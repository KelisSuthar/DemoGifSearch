import {Image, Modal, Text, View} from 'react-native';
import {CustomeModal} from '../Modal/Modal';
import {getHeightPer, getWidthPer} from '../../../utils/constants/appConstants';
import {useTranslation} from 'react-i18next';
import {textstyles} from '../../../utils/schema/commonStyles';

export const NoInternetLayout = ({visible, ...props}) => {
  const {t} = useTranslation();
  return (
    <Modal
      visible={visible}
      animationType="slide"
      children={
        <View
          style={{
            height: getHeightPer(100),
            width: getWidthPer(100),
            alignItems: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: getWidthPer(80),
              justifyContent: 'center',

              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Image source={require('../../../assets/image/no_internet.png')} />
            <Text
              style={[
                textstyles.medium,
                {fontSize: 22, marginTop: 30, textAlign: 'center'},
              ]}>
              {t('no_internet')}
            </Text>
          </View>
        </View>
      }
    />
  );
};
