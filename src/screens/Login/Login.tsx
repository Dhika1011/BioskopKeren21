import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useTheme } from '@/hooks';
import { Button, Gap, Input } from '@/components';
import { Colors } from '@/theme/Variables';

const Login = (props: any) => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={styles.page}>
      <ImageBackground
        source={Images.sparkles.BacgroundLogin}
        resizeMode="cover"
        style={{ height: '100%', width: '100%' }}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)', '#000005']}
          style={styles.linearGradient}
        >
          <View style={styles.card}>
            <Input
              title="Email:"
              placeholder="Masukkan e-mail anda"
              value={email}
              onChangeText={(val: string) => setEmail(val)}
            />
            <Input
              title="Password:"
              placeholder="Masukkan Password anda"
              value={password}
              onChangeText={(val: string) => setPassword(val)}
              secureTextEntry={secureTextEntry}
              setSecureTextEntry={setSecureTextEntry}
            />
            <Gap height={20} />
            <View style={{ marginHorizontal: 20 }}>
              <Button
                label="Login"
                onPress={() => navigation.navigate('Home')}
              />
            </View>

            <TouchableOpacity
              style={[Layout.alignItemsCenter, styles.tombol1]}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={[Fonts.textBoldSmall, { color: Colors.white }]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.Black,
    flex: 1,
  },
  card: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    shadowColor: Colors.error,
    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: responsiveHeight(-40),
  },
  tombol1: {
    marginHorizontal: 20,
    marginVertical: 30,
    padding: 8,
    backgroundColor: Colors.Black,
    borderRadius: 8,
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: responsiveHeight(65),
  },
});
