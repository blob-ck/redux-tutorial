import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Store as store} from "redux";
import Provider from "react-redux";
//1. 맨 왼쪽 path의 이름으로 js파일을 찾는다.
//2. 1.이 없다면 일치하는 폴더 내의 index.js를 찾는다.

// store.dispatch(action);

console.log("After dispatch: ", store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
