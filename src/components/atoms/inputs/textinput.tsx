import React from 'react';
import {View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {
  colors,
  fonts,
  hints,
  keyboardType,
} from '../../../utils/constants/appConstants';

export const CustomeTextInput = ({...props}) => {
  return (
    <View>
      <TextInput
        autoCorrect={false}
        value={props.value}
        autoCapitalize={props.autoCapitalize}
        mode="outlined"
        returnKeyType={props.returnKeyType}
        maxLength={
          props.keyboardType == keyboardType.email_address
            ? 80
            : props.maxLength
        }
        multiline={props.multiline}
        // error={props.error}
        keyboardType={props.keyboardType}
        label={props.label}
        placeholder={
          props.keyboardType == keyboardType.email_address
            ? hints.email_ex
            : props.placeholder
        }
        onChangeText={props.onChangeText}
        outlineColor={props.error == true ? colors.error_red : colors.grey}
        activeOutlineColor={
          props.error == true ? colors.error_red : colors.green
        }
        cursorColor={colors.grey}
        style={[
          {
            backgroundColor: 'white',
            fontFamily: fonts.medium,
            fontSize: 15,
          },
          props.style,
        ]}
        placeholderTextColor={colors.grey}
        outlineStyle={{
          borderRadius: 12,
          borderWidth: props.error == true ? 2 : 1,
        }}
        contentStyle={{
          color: colors.blue,
          fontFamily: fonts.medium,
          fontSize: 15,
        }}
      />
      {props.error ? (
        <HelperText type="error" visible={props.error}>
          {props.message != ''
            ? `${props.message}`
            : `${props.label} field is required`}
        </HelperText>
      ) : null}
    </View>
  );
};
