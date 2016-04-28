'use strict';

import React from 'react-native';
import { Provider } from 'react-redux';
import <%= appName %> from './<%= appName %>';
import configureStore from './store/configureStore';
const store = configureStore();

export default function setup(){
  class Root extends React.Component {
    constructor() {
      super();
    }
    render() {
      return (
        <Provider store={store}>
          <<%= appName %> />
        </Provider>
      );
    }
  }
  return Root;
}
