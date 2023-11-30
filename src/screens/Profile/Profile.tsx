import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  FlatList,
  RefreshControl,
} from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { DataProfile } from '../../components/DataProfile';
import { Button, Gap, Input } from '@/components';
import { ListProfile } from '@/components/DataListProfile';
import { Colors } from '@/theme/Variables';
import { ScrollView } from 'react-native';

const Profile = () => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const navigation = useNavigation();

  const [Firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [Secondname, setSecondname] = useState('');
  const [nomerhp, setNomerhp] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <ScrollView
      style={{ backgroundColor: Colors.white, flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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

      <Gap height={30} />
      <Text style={[Fonts.textBold, styles.text]}>{DataProfile.nama}</Text>
      <Gap height={7} />
      <Text style={[Fonts.textBold, styles.text]}>{DataProfile.email}</Text>
      <View>
        <Gap height={25} />
        <FlatList
          data={ListProfile}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.page12}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card12}
              onPress={() => navigation.navigate(item.halaman, { item: item })}
            >
              <View
                style={[
                  Layout.row,
                  Layout.justifyContentBetween,
                  { backgroundColor: Colors.white },
                ]}
              >
                <Image source={item.gambar} style={{ width: 24, height: 24 }} />
                <Text style={[Fonts.textBold]}>{item.nama}</Text>
                <Image source={item.Icon} style={{ width: 24, height: 24 }} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  foto: { width: 110, height: 110, borderRadius: 110 / 2 },
  profile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: Colors.background,
  },
  text: { textAlign: 'center', fontSize: 15 },
  page12: {
    paddingHorizontal: 15,
    borderRadius: 10,

    backgroundColor: Colors.white,
  },
  card12: {
    marginTop: 3,
    backgroundColor: Colors.white,
    elevation: 2,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 5,
  },
});
