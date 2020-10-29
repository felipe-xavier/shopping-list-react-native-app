import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function AddItem({addItem}) {
  const [text, setText] = useState('');

  const onChange = (itemText) => setText(itemText);

  const onPress = () => {
    addItem(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={onPress}
        disable={text !== ''}>
        <Text style={styles.btnText}>
          {' '}
          <Icon name="plus" size={20} /> Add item{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 9,
    backgroundColor: '#c2bad8',
    margin: 5,
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'darkslateblue',
  },
  input: {
    height: 60,
    fontSize: 16,
    padding: 8,
  },
});

export default AddItem;
