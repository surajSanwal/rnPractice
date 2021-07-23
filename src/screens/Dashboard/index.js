import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../../component/button';
import {logout} from '../../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const onLogoutPress = useCallback(() => {
    dispatch(logout());
  }, []);
  return (
    <View>
      <Text>Home</Text>
      <Button name="Logout" onPress={onLogoutPress} />
    </View>
  );
};

export default Home;
