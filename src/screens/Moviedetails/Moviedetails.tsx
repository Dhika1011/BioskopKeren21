import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { DataTimeAndDate } from '../../components/DataTimeandDate';
import { DataJam } from '../../components/DataJam';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { DataKursi } from '@/components/DataKursi';
import { DataKursi2 } from '@/components/DataKursi2';
import { DataKursi3 } from '@/components/Datakursi3';
import { DataKursi4 } from '@/components/DataKursi4';
import { Button } from '@/components';
import { DataFilem } from '@/components/DataFilem';

const Moviedetails = (props: any) => {
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
  const [dataSeleksi, setDataSeleksi] = useState(null);
  const [dataSeleksiDate, setDataSeleksiDate] = useState(null);
  const [dataSeleksi2, setDataSeleksi2] = useState(null);
  const [dataSeleksiJam2, setDataSeleksiJam2] = useState(null);
  const [dataSeleksikursi, setDataSeleksikursi] = useState(null);
  const [dataSeleksikursi2, setDataSeleksikursi2] = useState(null);
  const Data1 = props.route.params.Data;
  console.log('Data', Data1);
  ('use strict');
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Colors.white }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={[Layout.alignItemsCenter, { padding: 15 }]}>
        <Text style={[Fonts.textBold]}>{Data1.Judul}</Text>
      </View>
      <View>
        <FlatList
          data={DataTimeAndDate}
          horizontal
          style={{ marginLeft: 20, marginRight: 20 }}
          renderItem={({ item }) => {
            console.log('dataSeleksi?.day == item.day ', dataSeleksi, item.day);
            return (
              <TouchableOpacity
                onPress={() => {
                  setDataSeleksi(item.day);
                  setDataSeleksiDate(item);
                }}
                style={{
                  margin: 7,
                  backgroundColor:
                    dataSeleksi == item.day ? Colors.error : Colors.bg,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 5,
                }}
              >
                <View style={Layout.justifyContentCenter}>
                  <Text
                    style={{
                      color:
                        dataSeleksi == item.day ? Colors.white : Colors.Gray200,
                      fontSize: 14,
                      alignSelf: 'center',
                    }}
                  >
                    {item.day}
                  </Text>
                  <Text
                    style={{
                      color:
                        dataSeleksi == item.day ? Colors.white : Colors.Gray200,
                      fontSize: 14,
                      alignSelf: 'center',
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ top: 20 }}>
        <FlatList
          data={DataJam}
          horizontal
          style={{ marginLeft: 20, marginRight: 20 }}
          renderItem={({ item }) => {
            console.log(
              'dataSeleksi?.jam == item.jam ',
              dataSeleksi2,
              item.Jam,
            );
            return (
              <TouchableOpacity
                onPress={() => {
                  setDataSeleksi2(item.Jam);
                  setDataSeleksiJam2(item);
                }}
                style={{
                  margin: 7,
                  backgroundColor:
                    dataSeleksi2 == item.Jam ? Colors.error : Colors.bg,

                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 5,
                }}
              >
                <View style={Layout.justifyContentCenter}>
                  <Text
                    style={{
                      color:
                        dataSeleksi2 == item.Jam
                          ? Colors.white
                          : Colors.Gray200,
                      fontSize: 18,
                      alignSelf: 'center',
                    }}
                  >
                    {item.Jam}
                  </Text>
                  <Text
                    style={{
                      color:
                        dataSeleksi2 == item.Jam
                          ? Colors.white
                          : Colors.Gray200,
                      fontSize: 13,
                    }}
                  >
                    {item.harga}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={[Layout.center, { marginTop: responsiveHeight(8) }]}>
        <Image
          source={Images.sparkles.Layar}
          style={{ width: 292, height: 37 }}
        />
        <Text style={[Fonts.textBold, Layout.alignItemsCenter]}>
          Screen This Way
        </Text>
      </View>
      <View
        style={[
          Layout.alignItemsCenter,
          { marginVertical: 15, marginHorizontal: 15, marginTop: 20 },
        ]}
      >
        <FlatList
          data={DataKursi}
          horizontal
          style={{ marginLeft: 20, marginRight: 20 }}
          renderItem={({ item }) => {
            console.log(
              'dataSeleksi?.nama == item.name ',
              dataSeleksi,
              item.Kursi,
            );
            return (
              <TouchableOpacity
                onPress={() => {
                  setDataSeleksikursi(item.Kursi);
                  setDataSeleksikursi2(item);
                }}
                style={{
                  marginRight: 5,
                  backgroundColor:
                    dataSeleksikursi == item.Kursi ? Colors.error : Colors.Blue,

                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  marginLeft: 5,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color:
                      dataSeleksikursi == item.Kursi
                        ? Colors.white
                        : Colors.white,
                  }}
                >
                  {item.Kursi}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={[
          Layout.alignItemsCenter,
          { marginVertical: 15, marginHorizontal: 15, top: -5 },
        ]}
      >
        <FlatList
          data={DataKursi2}
          horizontal
          style={{ marginLeft: 20, marginRight: 20 }}
          renderItem={({ item }) => {
            console.log(
              'dataSeleksi?.nama == item.name ',
              dataSeleksi,
              item.Kursi,
            );
            return (
              <TouchableOpacity
                onPress={() => {
                  setDataSeleksikursi(item.Kursi);
                  setDataSeleksikursi2(item);
                }}
                style={{
                  marginRight: 5,
                  backgroundColor:
                    dataSeleksikursi == item.Kursi ? Colors.error : Colors.Blue,

                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  marginLeft: 5,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color:
                      dataSeleksikursi == item.Kursi
                        ? Colors.white
                        : Colors.white,
                  }}
                >
                  {item.Kursi}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={[
          Layout.alignItemsCenter,
          { marginVertical: 15, marginHorizontal: 15, top: -5 },
        ]}
      >
        <FlatList
          data={DataKursi3}
          horizontal
          style={{ marginLeft: 20, marginRight: 20 }}
          renderItem={({ item }) => {
            console.log(
              'dataSeleksi?.nama == item.name ',
              dataSeleksi,
              item.Kursi,
            );
            return (
              <TouchableOpacity
                onPress={() => {
                  setDataSeleksikursi(item.Kursi);
                  setDataSeleksikursi2(item);
                }}
                style={{
                  marginRight: 5,
                  backgroundColor:
                    dataSeleksikursi == item.Kursi ? Colors.error : Colors.Blue,

                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  marginLeft: 5,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color:
                      dataSeleksikursi == item.Kursi
                        ? Colors.white
                        : Colors.white,
                  }}
                >
                  {item.Kursi}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={[
          Layout.alignItemsCenter,
          { marginVertical: 15, marginHorizontal: 15, top: -5 },
        ]}
      >
        <FlatList
          data={DataKursi4}
          horizontal
          style={{ marginLeft: 20, marginRight: 20 }}
          renderItem={({ item }) => {
            console.log(
              'dataSeleksi?.nama == item.name ',
              dataSeleksi,
              item.Kursi,
            );
            return (
              <TouchableOpacity
                onPress={() => {
                  setDataSeleksikursi(item.Kursi);
                  setDataSeleksikursi2(item);
                }}
                style={{
                  marginRight: 5,
                  backgroundColor:
                    dataSeleksikursi == item.Kursi ? Colors.error : Colors.Blue,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  marginLeft: 5,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color:
                      dataSeleksikursi == item.Kursi
                        ? Colors.white
                        : Colors.white,
                  }}
                >
                  {item.Kursi}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Button
          label="Continue"
          onPress={() =>
            navigation.navigate('ConfirmationTiket', {
              Data1: Data1,
              DataTimeAndDate: dataSeleksiDate,
              DataJam: dataSeleksiJam2,
              DataKursi: DataKursi,
              DataKursi: DataKursi2,
              DataKursi: DataKursi3,
              DataKursi: DataKursi4,
            })
          }
        />
      </View>
    </ScrollView>
  );
};

export default Moviedetails;

const styles = StyleSheet.create({});
