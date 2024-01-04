import {
  Dimensions,
  PermissionsAndroid,
  Platform,
  Share,
  StatusBar,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
const windowWidth = Dimensions.get('window').width * 0.01;
const windowHeight = Dimensions.get('window').height * 0.01;

export const screenName = {
  GifSearch: 'GifSearchScreen',
};
export function getHeight(per: number) {
  return windowHeight * per;
}
export function getWidth(per: number) {
  return windowWidth * per;
}

export const validationMsg = {};

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  grey: '#7F6E9C',
  red: '#EA3643',
};

export const fonts = {};
export const images = {};

export const Labelhints = {
  search: 'Search ...',
};
export const strings = {};
export const gifCreds = {api_key: 'YIgFoVU5Y8vghmhTR4LmyhZffICVJHA7'};

export const regex = {
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
  only_num: /^\d+$/,
  only_alphabates: /^[a-zA-Z]*$/,
  allow_only_num: /[^0-9]/g,
  allow_only_decimal_num: /[^0-9.]|(?<=\..*)\./g,
  allow_only_alphabates: /[0-9 \/|'"{}!@#$%^&*?()+=`~:;<,>._-]/,
};

export async function checkConnectivity() {
  return await NetInfo.fetch().then(state => {
    return state.isConnected;
  });
}

export async function isInternet() {
  return await checkConnectivity();
}
