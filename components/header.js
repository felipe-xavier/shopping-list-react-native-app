import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends Component {
  styles = StyleSheet.create({
    header: {
      height: 60,
      padding: 15,
      backgroundColor: 'darkslateblue',
    },
    text: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 23,
    },
  });

  render() {
    return (
      <View style={this.styles.header}>
        <Text style={this.styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

Header.defaultProps = {
  title: 'Shopping List',
};

export default Header;
