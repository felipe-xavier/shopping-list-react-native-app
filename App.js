import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'uuid-random';
import Header from './components/header';
import ListItem from './components/listItem';
import AddItem from './components/addItem';

function App() {
  const [items, setItem] = useState([
    {id: uuid(), text: 'Potatoes'},
    {id: uuid(), text: 'Tomatoes'},
    {id: uuid(), text: 'Eggplants'},
    {id: uuid(), text: 'Broccoli'},
  ]);

  const deleteItem = (id) => {
    setItem((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addItem = (text) => {
    if (text) {
      setItem((prevItems) => [{id: uuid(), text}, ...prevItems]);
    } else {
      Alert;
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
  },
});

export default App;
