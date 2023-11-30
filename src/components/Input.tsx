import React, { useRef, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks';
import { Colors } from '../theme/Variables';
import Gap from './Gap';

type props = {
  height?: number | string;
  mode?: 'plain' | 'outline';
  title?: string;
  onChangeText?: any;
  editable?: boolean;
  value?: string;
  maxLength?: number;
  placeholder?: string;
  isError?: boolean;
  errorMsg?: string;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'number-pad'
    | 'phone-pad'
    | 'visible-password';
  autoCapitalize?: 'characters' | 'none' | 'words' | 'sentences';
  secureTextEntry?: boolean;
  textContentType?:
    | 'emailAddress'
    | 'password'
    | 'oneTimeCode'
    | 'name'
    | 'telephoneNumber'
    | 'none';
  style?: any;
  setSecureTextEntry?: any;
  onBlur?: any;
  onFocus?: any;
};
const eyeStyle = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 52,
};
const Serchtyle = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 52,
};

const Input = ({
  height,
  mode,
  onBlur,
  onFocus,
  style,
  title,
  onChangeText,
  editable,
  value,
  maxLength,
  placeholder,
  keyboardType,
  autoCapitalize,
  isError,
  errorMsg,
  secureTextEntry,
  textContentType = 'none',
  setSecureTextEntry,
}: props) => {
  const { Layout, Common, Fonts } = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const borderColor = isFocus
    ? Colors.error
    : isError
    ? Colors.Black
    : 'rgba(0,0,0,0.05)';
  const textColor = isFocus ? Colors.primary : Colors.gray;
  const fontStyle = isFocus
    ? Fonts.textRegular
    : isError
    ? Fonts.textRegular
    : Fonts.textSmall;
  const backgroundColor = editable ? Colors.inputBackground : '#F4F4F4';
  return (
    <View>
      <Text style={[fontStyle, { fontSize: 12 }]}>{title}</Text>
      {/* <Gap height={6} /> */}
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={editable}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholderTextColor={Colors.gray}
        value={value}
        autoCapitalize={autoCapitalize}
        // selectTextOnFocus
        textContentType={textContentType}
        onBlur={() => {
          setIsFocus(false);
          onBlur();
        }}
        onFocus={() => {
          setIsFocus(true);
          onFocus();
        }}
        secureTextEntry={secureTextEntry}
        textAlignVertical="center"
        style={[Common.textInput(borderColor, backgroundColor)]}
      />
      {isError && (
        <Text
          style={[
            Fonts.textSmall,
            {
              position: 'absolute',
              bottom: 3,
              left: 8,
              color: Colors.error,
              fontSize: 9.5,
              marginHorizontal: 4,
            },
          ]}
        >
          {errorMsg}
        </Text>
      )}
      {title?.toLowerCase().includes('kata sandi') && (
        <TouchableOpacity
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          style={eyeStyle}
        ></TouchableOpacity>
      )}
    </View>
  );
};

Input.defaultProps = {
  height: 35,
  mode: 'plain',
  title: '',
  onChangeText: undefined,
  editable: true,
  value: '',
  maxLength: null,
  placeholder: '',
  keyboardType: 'default',
  autoCapitalize: 'words',
  isError: false,
  errorMsg: '',
  secureTextEntry: false,
  style: {},
  textContentType: '',
  setSecureTextEntry: null,
  onBlur: () => {},
  onFocus: () => {},
};

export default Input;
