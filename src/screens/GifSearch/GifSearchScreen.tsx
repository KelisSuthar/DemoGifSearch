import {View, Text, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function GifSearchScreen() {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={[styles.common]}>
      <TextInput
        value={search}
        onChangeText={value => {
          setSearch(value);
        }}
        style={styles.searchBar}
      />
      {/* <FlatList
        data={}
        contentContainerStyle={{padding: 10}}
        numColumns={2}
        style={[styles.list]}
        renderItem={({item, index}) => <GifLayout item={item} index={index} />}
      /> */}
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
    backgroundColor: 'red',
  },
  searchBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 1,
    marginTop: 20,
    margin: 10,

    borderBottomColor: 'black',
  },
});
