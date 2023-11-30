import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useState } from 'react';
import { Button, Gap, Input } from '@/components';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Modal from 'react-native-modal';

const Payment = (props: any) => {
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
  const Harga1 = props.route.params.Harga;
  console.log('Harga1', Harga1);
  ('use strict');
  const navigation = useNavigation();
  const [CardName, setCardName] = useState('');
  const [CardNumber, setCardNumber] = useState('');
  const [nomerhp, setNomerhp] = useState('');
  const [modal, setModal] = useState(false);
  return (
    <ScrollView
      style={{ backgroundColor: Colors.white, flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ padding: 20 }}>
        <Text style={[Fonts.textBold, { fontSize: 17 }]}>Payment</Text>
      </View>
      <View style={{ marginHorizontal: 20, padding: 20, flex: 1 }}>
        <Input
          title="Card Name:"
          placeholder="Card Name"
          value={CardName}
          onChangeText={(val: string) => setCardName(val)}
        />
        <Input
          title="Card Number:"
          placeholder="Card Name"
          value={CardNumber}
          onChangeText={(val: string) => setCardNumber(val)}
        />
        <View style={[Layout.row]}>
          <Input
            title="Expiring date:"
            placeholder="Expiring date"
            value={nomerhp}
            onChangeText={(val: string) => setNomerhp(val)}
            keyboardType="phone-pad"
          />
          <Gap width={10} />
          <Input
            title="CVV:"
            placeholder="Masukkan Nomer CVV"
            value={nomerhp}
            onChangeText={(val: string) => setNomerhp(val)}
            keyboardType="phone-pad"
          />
        </View>
        <View>
          <Modal isVisible={modal}>
            <View style={[Layout.center, styles.modal]}>
              <Image
                source={Images.sparkles.Sukses}
                style={{ width: 140, height: 157 }}
              />
              <Gap height={60} />
              <View>
                <TouchableOpacity
                  style={[Layout.alignItemsCenter, styles.tombol1]}
                  onPress={() => setModal(false)}
                >
                  <Text style={[Fonts.textRegular, { color: Colors.white }]}>
                    Return Home
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <View>
        <View
          style={[Layout.row, Layout.justifyContentBetween, { margin: 20 }]}
        >
          <Text style={[Fonts.textBold, styles.gaktau12]}>Sub-total:</Text>

          <Text style={[Fonts.textBold, styles.gaktau1]}>{Harga1.harga}</Text>
        </View>
        <View
          style={[Layout.row, Layout.justifyContentBetween, { margin: 20 }]}
        >
          <Text style={[Fonts.textBold, styles.gaktau12]}>Total:</Text>
          <Text style={[Fonts.textBold, styles.gaktau1]}>{Harga1.harga}</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Button label="Buy " onPress={() => setModal(true)} />
      </View>
      <Gap height={59} />
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    shadowColor: Colors.error,
    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: responsiveHeight(-50),
  },
  modal: {
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 6,
    height: 400,
  },
  tombol1: {
    marginHorizontal: 5,
    padding: 8,
    backgroundColor: Colors.Gray200,
    borderRadius: 8,
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
});
