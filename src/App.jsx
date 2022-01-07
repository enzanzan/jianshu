import React, { Component } from "react";
import { Provider } from "react-redux";
import { Globalstyle } from "./style";
import { FontStyle } from './statics/iconfont/iconfont';
import Header from "./common/header";
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle />
        <FontStyle />
        <Header />
      </Provider>
    );
  }
}

