import React from 'react';
import { ActivityIndicator, Platform, Text, View } from 'react-native';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import { useTheme } from '../hooks';
import { makeViewsRefSet } from 'react-native-reanimated/lib/typescript/reanimated2/ViewDescriptorsSet';

type Props = {
  onPress: any;
  mode?: 'fill' | 'outline';
  label?: string;
  disabled?: boolean;
  isLoading?: boolean;
  labelStyle?: any;
  buttonStyle?: any;
  children?: any;
};

function IconRightBordered(props) {
  return (
    <View
      style={[
        props.Layout.justifyContentCenter,
        props.Layout.alignItemsCenter,
        {
          borderWidth: 0.8,
          borderRadius: 20,
          height: 16,
          width: 16,
          borderStyle: 'dashed',
          borderColor: props.Colors.white,
        },
      ]}
    ></View>
  );
}

const Button = ({
  mode,
  label,
  disabled,
  onPress,
  isLoading,
  labelStyle,
  buttonStyle,
  children,
}: Props) => {
  const { Layout, Common, Fonts, Colors } = useTheme();
  return Platform.OS === 'android' ? (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      // background={TouchableNativeFeedback.Ripple(
      //     'rgba(0,0,0,0.15)',
      //     false,
      // )}
    >
      <View
        style={[
          mode == 'outline' ? Common.button.outline : Common.button.rounded,
          buttonStyle,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator
            color={Colors.white}
            size={24}
            style={{ alignSelf: 'center' }}
          />
        ) : (
          <View
            style={[
              Layout.fill,
              { width: '100%' },
              Layout.row,
              Layout.alignItemsCenter,
              children ? Layout.center : Layout.justifyContentCenter,
            ]}
          >
            <Text
              style={[Fonts.textSmall, { color: Colors.white }, labelStyle]}
            >
              {label}
            </Text>
            {children}
          </View>
        )}
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          mode == 'outline' ? Common.button.outline : Common.button.rounded,
          buttonStyle,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator
            color={Colors.white}
            size={20}
            style={{ alignSelf: 'center' }}
          />
        ) : (
          <View
            style={[
              Layout.fill,
              { width: '100%' },
              Layout.row,
              Layout.alignItemsCenter,
              children ? Layout.center : Layout.justifyContentCenter,
            ]}
          >
            <Text
              style={[Fonts.textSmall, { color: Colors.white }, labelStyle]}
            >
              {label}
            </Text>
            {children}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  onPress: () => {},
  mode: 'fill',
  label: '',
  disabled: false,
  isLoading: false,
  labelStyle: {},
  buttonStyle: {},
  children: null,
};

export default Button;
