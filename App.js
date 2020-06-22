import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./Store/RootSaga";
import combinedReducers from "./Store/rootReducers";
import { AuthStackScreen } from "./Navigator/AuthStack";
import { HomeStackScreen } from "./Navigator/HomeStack";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV === 'production'
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <AuthStackScreen /> */}
        <HomeStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
