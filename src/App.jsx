import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import { Globalstyle } from "./style";
import { FontStyle } from './statics/iconfont/iconfont';
import Header from "./common/header";
import Home from "./pages/home";
import Detail from './pages/detail/loadbale.js';
import Login from './pages/login';
import Writer from "./pages/write";
import store from './store';

export default class App extends Component {
  render() {
    return (
      <div>
        <meta name="referrer" content="no-referrer" />
        <Globalstyle />
        <FontStyle />
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Writer}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div>

    );
  }
}



