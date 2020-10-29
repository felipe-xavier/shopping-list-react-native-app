import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import uuid from 'uuid-random';
import Header from './components/header';
import ListItem from './components/listItem';

function App() {
  const [items, setIte] = useState([
    {id: uuid(), text: 'Potatoes'},
    {id: uuid(), text: 'Tomatoes'},
    {id: uuid(), text: 'Eggplants'},
    {id: uuid(), text: 'Broccoli'},
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
});

export default App;
