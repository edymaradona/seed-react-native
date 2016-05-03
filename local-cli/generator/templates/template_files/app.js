import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import { connect } from 'react-redux';

export default class Hello extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#153a44",
  },
  logo:{
    marginBottom: 20
  },
  text: {
    color: "#fff"
	}
});
