import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import BanerSlider from '@/components/BennerSlider/BenerSlider';
import { DataFilem } from '../../components/DataFilem';
import { Colors } from '@/theme/Variables';
import { Gap } from '@/components';
import { datas } from '@/components/datas';
import Placeholder from 'rn-placeholder';

const Home = (props: any) => {
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

  const [dataSeleksi, setDataSeleksi] = useState(null);
  const [dataSeleksiDate, setDataSeleksiDate] = useState(null);
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Colors.background }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ padding: 20 }}>
        <Text style={[Fonts.textBold]}>
          Welcome{' '}
          <Text style={{ fontSize: 20, color: Colors.error }}>Seun</Text>
        </Text>
      </View>
      <BanerSlider />

      <FlatList
        data={datas}
        horizontal
        style={{ marginLeft: 20, marginRight: 20 }}
        renderItem={({ item }) => {
          console.log(
            'dataSeleksi?.nama == item.nama ',
            dataSeleksi,
            item.nama,
          );
          return (
            <TouchableOpacity
              onPress={() => {
                setDataSeleksi(item.nama);
                setDataSeleksiDate(item);
              }}
              style={{
                margin: 7,
                backgroundColor:
                  dataSeleksi == item.nama ? Colors.error : Colors.bg,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <View style={Layout.justifyContentCenter}>
                <Text
                  style={{
                    color:
                      dataSeleksi == item.nama ? Colors.white : Colors.Gray200,
                    fontSize: 14,
                    alignSelf: 'center',
                  }}
                >
                  {item.nama}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View style={{ marginHorizontal: 20 }}>
        <FlatList
          data={DataFilem}
          scrollEnabled={true}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.page}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.Card}
              onPress={() => navigation.navigate('DetailTiket', { item: item })}
            >
              <Image source={item.gambar1} style={styles.gambar} />
              <Gap height={5} />
              <View>
                <Text style={[Fonts.textBold, { textAlign: 'center' }]}>
                  {item.Judul}
                </Text>
              </View>
              <Gap height={10} />
            </TouchableOpacity>
          )}
        />
        <Gap height={30} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  Card: {
    backgroundColor: Colors.white,
    width: 150,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  gambar: {
    width: 150,
    height: 205,
    borderRadius: 6,
  },
});
