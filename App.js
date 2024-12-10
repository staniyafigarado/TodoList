
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/store';
import AppNavigator from './src/navigation/AppNavigator';
// Create Redux store
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
