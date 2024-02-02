import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants'
import { DATA } from './Data';
import Row from './comps/Row';
import Search from './comps/Search';
import Add from './comps/Add';
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";

const STORAGE_KEY = '@persons_key'

export default function App() {
  const [items, setItems] = useState([]);
  const [selectID, setSelectID] = useState(null);

  const getData = async () => {
    try{
      const value = await useAsyncStorage.getItem(STORAGE_KEY)
      console.log('get');
      const json = JSON.parse(value)
      if (json === null) {
        json = []
      }
      console.log(json);
      setItems(json)
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    getData()
  }, []);

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(value)
      console.log('store');
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue)
    } catch (ex) {
      console.log(ex);
    }
  }

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search))
    setItems(searchArray)
  }
  const select = (id) => {
    setSelectID(id)
  }

  return (
    <View style={styles.container}>
      <Search executeSearch={executeSearch} />
      <Add items = {items} setItems = {setItems} storeData = {storeData}/>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        extraData={selectID}
        renderItem={({ item }) => (
          <Row person={item} selectID={selectID} select={select} />
        )}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.StatusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 35,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#CCC',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  image: {
    marginRight: 16
  },
  rowText: {
    fontSize: 16,
    marginLeft: 5,
    padding: 1
  },
});
