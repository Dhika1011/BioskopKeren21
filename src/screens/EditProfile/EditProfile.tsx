import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { DataProfile } from '../../components/DataProfile';
import { Button, Gap, Input } from '@/components';
import { Colors } from '@/theme/Variables';

const EditProfile = (props: any) => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();
  const navigation = useNavigation();

  const [Firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [Secondname, setSecondname] = useState('');
  const [nomerhp, setNomerhp] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View style={{ backgroundColor: Colors.white, flex: 1 }}>
      <View style={[Layout.center]}>
        <TouchableOpacity
          style={[
            Layout.alignItemsCenter,
            Layout.justifyContentCenter,
            styles.profile,
          ]}
        >
          <Image source={DataProfile.avatar} style={styles.foto} />
        </TouchableOpacity>
      </View>

      <View style={{ margin: 20, padding: 10 }}>
        <Input
          title="First name:"
          placeholder="First name You"
          value={Firstname}
          onChangeText={(val: string) => setFirstname(val)}
        />
        <Gap height={10} />
        <Input
          title="Second name:"
          placeholder="Second name You"
          value={Secondname}
          onChangeText={(val: string) => setSecondname(val)}
        />
        <Gap height={6} />
        <Input
          title="Email:"
          placeholder="Masukkan Email ada"
          value={email}
          onChangeText={(val: string) => setEmail(val)}
        />
        <Gap height={10} />
        <Button
          label="Update Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  foto: { width: 215, height: 215, borderRadius: 215 / 2 },
  text: { textAlign: 'center', fontSize: 15 },
  profile: {
    width: 240,
    height: 240,
    borderRadius: 240 / 2,
    borderWidth: 1,
    borderColor: Colors.background,
  },
});
