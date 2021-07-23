import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../../component/button';
import {login} from '../../redux/actions';

const SignIn = () => {
  const dispatch = useDispatch();
  const onLoginPress = useCallback(() => {
    dispatch(login());
  }, []);

  return (
    <View>
      <Text>Sign In</Text>
      <Button name="Login" onPress={onLoginPress} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
