import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { responsiveHeight } from 'react-native-responsive-dimensions';

import { ScrollView } from 'react-native';
import { useTheme } from '@/hooks';
import { Button, Gap, Input } from '@/components';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '@/theme/Variables';

const Register = (props: any) => {
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
  const [firstName, setFirstName] = useState('');
  const [Secondname, setSecondname] = useState('');
  const [password, setPassword] = useState('');
  const [RePassword, setRePassword] = useState('');

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <ImageBackground
        source={Images.sparkles.Bg}
        resizeMode="cover"
        style={{ height: '100%', width: '100%' }}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.9)', '#000005']}
          style={styles.linearGradient}
        >
          <TouchableOpacity
            style={{ alignSelf: 'flex-end' }}
            onPress={() => navigation.navigate('Login')}
          >
            <Image
              source={Images.icons.IconX}
              style={{ width: 22, height: 15, top: responsiveHeight(-10) }}
            />
          </TouchableOpacity>
          <View style={styles.card}>
            <Input
              title="First name:"
              placeholder="Masukkan First name anda"
              value={firstName}
              onChangeText={(val: string) => setFirstName(val)}
            />
            <Input
              title="Second name:"
              placeholder="Masukkan Second name anda"
              value={Secondname}
              onChangeText={(val: string) => setSecondname(val)}
            />
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
            />
            <Input
              title="Re-Password:"
              placeholder="Masukkan Re-Password anda"
              value={RePassword}
              onChangeText={(val: string) => setRePassword(val)}
              secureTextEntry={secureTextEntry}
            />
            <Gap height={24} />
            <View style={{ marginHorizontal: 10 }}>
              <Button
                label="Register"
                onPress={() => navigation.navigate('Home')}
              />
            </View>
            <Gap height={20} />
            <TouchableOpacity
              style={[Layout.alignItemsCenter, styles.tombol]}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={[Fonts.textSmall, { color: Colors.white }]}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: responsiveHeight(15),
  },
  page: {
    flex: 1,
  },
  tombol: {
    marginHorizontal: 10,
    padding: 8,
    backgroundColor: '#858585',
    borderRadius: 8,
  },
  input: { marginHorizontal: 20, flex: 1 },
  card: {
    backgroundColor: Colors.white,
    marginHorizontal: 2,
    shadowColor: Colors.error,
    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: responsiveHeight(-5),
  },
});
