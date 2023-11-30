import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  RefreshControl,
} from 'react-native';
import React, { useState, useCallback, useRef } from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { Button, Gap } from '@/components';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { Colors } from '@/theme/Variables';
import YoutubePlayer from 'react-native-youtube-iframe';

const DetailTiket = (props: any) => {
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
  const Data = props.route.params.item;
  console.log('Data', Data);
  ('use strict');
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Colors.white }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ padding: 20 }}>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={Data.videoId}
          onChangeState={onStateChange}
        />
      </View>
      <View
        style={[Layout.row, { margin: 20, marginTop: responsiveHeight(-11) }]}
      >
        <Text style={[Fonts.textBold, { fontSize: 24, color: Colors.error }]}>
          {Data.Judul}
        </Text>
        <Gap width={10} />
        <Image
          source={Data.Icon4k}
          style={{ width: 29, height: 22.04, top: 5 }}
        />
      </View>
      <View
        style={[Layout.row, { margin: 20, marginTop: responsiveHeight(-1) }]}
      >
        <Image source={Data.IconTime} style={{ width: 24, height: 24 }} />
        <Gap width={4} />
        <Text>152 minutes</Text>
        <Gap width={15} />
        <Image
          source={Data.IconStar}
          style={{
            width: 12,
            height: 11.48,
            top: 3,
          }}
        />
        <Gap width={4} />
        <Text>7.0 (IMDb)</Text>
      </View>
      <View style={styles.garis} />
      <View style={[Layout.row, styles.Gendre]}>
        <Text style={[Fonts.textBold, styles.text]}>{Data.day}</Text>
        <Text style={[Fonts.textBold, styles.text]}>{Data.Gendre}</Text>
      </View>
      <View
        style={[
          Layout.row,
          {
            margin: 20,
            top: responsiveHeight(-2),
            justifyContent: 'space-between',
          },
        ]}
      >
        <Text style={styles.text1}>{Data.date}</Text>
        <Gap width={65} />
        <TouchableOpacity style={styles.tombol}>
          <Text>Action</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tombol}>
          <Text>Sci-Fi</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.garis1} />
      <View style={{ padding: 20, top: responsiveHeight(-1) }}>
        <Text style={[Fonts.textBold, styles.text]}>Synopsis</Text>
        <Gap height={5} />
        <Text>{Data.sinopsis}</Text>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Button
          label="Buy Ticket"
          onPress={() => navigation.navigate('Moviedetails', { Data: Data })}
        />
      </View>
      <Gap height={30} />
    </ScrollView>
  );
};

export default DetailTiket;

const styles = StyleSheet.create({
  garis: {
    borderWidth: 0.3,
    marginVertical: 5,
    marginHorizontal: 20,
    marginTop: responsiveHeight(-1),
    backgroundColor: Colors.Gray200,
  },
  Gendre: {
    margin: 20,
    marginRight: responsiveHeight(8),
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1),
  },
  text: { fontSize: 17, color: Colors.Black },
  text1: { fontSize: 14 },
  tombol: {
    backgroundColor: Colors.Tombol,
    padding: 10,
    borderRadius: 15,
    top: responsiveHeight(-1),
  },
  garis1: {
    borderWidth: 0.3,
    marginVertical: 5,
    marginHorizontal: 20,
    marginTop: responsiveHeight(-3),
    backgroundColor: Colors.Gray200,
  },
});
