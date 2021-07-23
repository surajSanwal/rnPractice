import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, TextStyle} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.btnContainer, props.containerStyle]}>
      <Text style={[styles.textStyle, props.textStyle]}>{props.name}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  //   containerStyle: ViewStyle,
  //   textStyle: TextStyle,
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
  },
  textStyle: {
    fontSize: 20,
  },
});
