import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
  PixelRatio,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getGif} from '../../redux/actions';
import {GifLayout} from '../../components/organisms/FlatListRendered';
import {colors, strings} from '../../utils/constants/appConstants';

export default function GifSearchScreen() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [list, setList] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const resp = useSelector((state: any) => state.auth.getGifData);
  const error = useSelector((state: any) => state.auth.getGifError);
  const connectivityStatus = useSelector(
    (state: any) => state.auth.internetConnection,
  );
  useEffect(() => {
    if (resp != '' && resp != undefined) {
      if (list.length == 0) {
        setList(resp.data);
      } else {
        setList(data => [...data, ...resp.data]);
      }
    }
  }, [resp, error]);
  useEffect(() => {
    dispatch(getGif({search: search, offset: page.toString()}));
  }, [page]);

  return (
    <SafeAreaView style={[styles.common]}>
      <TextInput
        value={search}
        returnKeyType="search"
        onChangeText={value => {
          setSearch(value);
        }}
        style={styles.searchBar}
        onSubmitEditing={() => {
          dispatch(getGif({search: search, offset: page.toString()}));
        }}
      />
      {connectivityStatus == true ? (
        <View style={styles.list}>
          <Text>{strings.no_internet}</Text>
        </View>
      ) : (
        <FlatList
          data={list}
          numColumns={2}
          style={[styles.list]}
          renderItem={({item, index}) => (
            <GifLayout item={item} index={index} />
          )}
          onEndReached={() => {
            setPage(page < 4999 ? page + 10 : 0);
          }}
          onEndReachedThreshold={0.1}
        />
      )}
    </SafeAreaView>
  );
}
export const styles = StyleSheet.create({
  common: {
    flex: 1,
    resizeMode: 'stretch',
  },
  list: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  searchBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    marginTop: 20,
    margin: 10,
    padding: 10,
    borderBottomColor: 'black',
  },
  noInternetTxt: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
    color: colors.black,
    fontWeight: 'bold',
  },
});
