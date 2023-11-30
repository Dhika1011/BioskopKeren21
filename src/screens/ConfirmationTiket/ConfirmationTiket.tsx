import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { DataFilem } from '../../components/DataFilem';
import { Colors } from '@/theme/Variables';
import { Button, Gap } from '@/components';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const ConfirmationTiket = (props: any) => {
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
  const Data2 = props.route.params.Data1;
  console.log('Data', Data2);
  ('use strict');
  const dhika = props.route.params.DataTimeAndDate;
  console.log('dhika', dhika);
  ('use strict');
  const Harga = props.route.params.DataJam;
  console.log('Harga', Harga);
  ('use strict');
  const Kursi12 = props.route.params.DataKursi;
  console.log('Kursi12)', Kursi12);
  ('use strict');

  return (
    <ScrollView
      style={styles.page}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.card}>
        <View style={[Layout.row]}>
          <Image
            source={Data2.gambar1}
            style={{ width: 142, height: 106, borderRadius: 6 }}
          />
          <Gap width={10} />
          <View>
            <Gap height={5} />
            <Text style={[Fonts.textBold]}>{Data2.Judul}</Text>
            <View>
              <Gap height={10} />
              <View style={[Layout.row]}>
                <Text style={[Fonts.textBold, { color: Colors.Black }]}>
                  {dhika.day}
                </Text>
                <Gap width={8} />
                <View style={{ marginTop: 3 }}>
                  <Text
                    style={[
                      Fonts.textBold,
                      { color: Colors.Black, fontSize: 14 },
                    ]}
                  >
                    {dhika.date}
                  </Text>
                </View>
                <Gap width={10} />
                <Text style={[Fonts.textBold, { marginTop: 3 }]}>2023</Text>
              </View>
              <Gap height={10} />
              <View style={[Layout.row]}>
                <Text>{Harga.Jam}</Text>
                <Gap width={10} />
                <Text>{Harga.harga}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: responsiveHeight(30) }}>
        <View style={styles.garis} />
        <Gap height={20} />
        <View
          style={[Layout.row, Layout.justifyContentBetween, { margin: 20 }]}
        >
          <Text style={[Fonts.textBold, styles.gaktau12]}>Sub-total:</Text>

          <Text style={[Fonts.textBold, styles.gaktau1]}>{Harga.harga}</Text>
        </View>
        <View
          style={[Layout.row, Layout.justifyContentBetween, { margin: 20 }]}
        >
          <Text style={[Fonts.textBold, styles.gaktau12]}>Total:</Text>
          <Text style={[Fonts.textBold, styles.gaktau1]}>{Harga.harga}</Text>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <Button
            label="Pay"
            onPress={() => navigation.navigate('Payment', { Harga: Harga })}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ConfirmationTiket;

const styles = StyleSheet.create({
  page: { backgroundColor: Colors.bg, flex: 1 },
  card: {
    marginTop: responsiveHeight(5),
    backgroundColor: Colors.white,
    elevation: 5,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginHorizontal: 15,
    marginBottom: 5,
  },
  gaktau1: {
    color: Colors.Black,
    fontSize: 17,
    textAlign: 'center',
  },
  gaktau12: {
    color: Colors.Black,

    textAlign: 'center',
  },
  garis: {
    borderWidth: 0.3,
    marginVertical: 5,
    marginHorizontal: 20,
    marginTop: responsiveHeight(-1),
    backgroundColor: Colors.Gray200,
  },
});
