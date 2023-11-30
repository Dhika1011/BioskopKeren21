import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { Gap } from '@/components';
import { Colors } from '@/theme/Variables';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { DataFilem } from '@/components/DataFilem';

const Ticket = (props: any) => {
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
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <FlatList
        data={DataFilem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.page}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.Page1}
            onPress={() => navigation.navigate('DetailTiket', { item: item })}
          >
            <View style={[Layout.row]}>
              <Image
                source={item.gambar1}
                style={{ width: 89, height: 92, borderRadius: 7 }}
              />
              <Gap width={10} />
              <View>
                <View>
                  <Text style={[Fonts.textBold, { fontSize: 16 }]}>
                    {item.Judul}
                  </Text>
                </View>
                <Gap height={7} />
                <Text
                  style={[
                    Fonts.textSmall,
                    { color: Colors.Black, fontSize: 13 },
                  ]}
                >
                  {item.date}
                </Text>
                <Gap height={10} />
                <View style={[Layout.row]}>
                  <Image
                    source={item.IconStar}
                    style={{ width: 15, height: 15 }}
                  />

                  <Gap width={10} />
                  <Text style={{ fontSize: 12, color: Colors.Black }}>
                    {item.day}
                  </Text>
                </View>
                <Gap height={8} />
                <View style={[Layout.row]}>
                  <Image
                    source={item.IconTime}
                    style={{ width: 16, height: 17 }}
                  />
                  <Gap width={5} />
                  <Text style={{ fontSize: 12, color: Colors.Black }}>
                    120 Menit
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  page: {
    paddingHorizontal: 15,
    borderRadius: 10,

    backgroundColor: Colors.background,
  },
  Page1: {
    marginTop: 5,
    backgroundColor: Colors.white,
    elevation: 2,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 5,
  },
});
