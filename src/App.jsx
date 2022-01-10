import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import { Globalstyle } from "./style";
import { FontStyle } from './statics/iconfont/iconfont';
import Header from "./common/header";
import Home from "./pages/home";
import Detail from './pages/detail';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <div>
        <meta name="referrer" content="no-referrer" />
        <Globalstyle />
        <FontStyle />
        <Provider store={store}>
          <div>
            <Header />
            <BrowserRouter>
              <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' exact component={Detail}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>

    );
  }
}

