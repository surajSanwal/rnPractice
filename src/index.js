import React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator, RootNavigator} from './navigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import setupStore from './redux/store';
//View , TouchableOpacity, Text, TextInput, FlatList, SectionList, Switch, Picker

//navigation --> react-naviation--->
/*
    react-native-router-flux
    react-native-navigation
    react-navigation (stack, tab naviagtor)
*/

const {store, persister} = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <NavigationContainer>
          {store.getState().user.isLoggedIn ? (
            <RootNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
