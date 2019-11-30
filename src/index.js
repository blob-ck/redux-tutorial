import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";

//@Params: state, action
const reducer = (state, action) => {
  if(action.type === 'changeState') {
    return action.payload;
  }
  return 'State'; // 초기상태
}

//Decorator 패턴?
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store);
console.log("createStore: ", store.getState());

//subscribe
store.subscribe(()=> console.log('subscribe: ', store.getState()));

//action dispatch test
const action = {
  type: "changeState", // 약속된 변수명 type
  payload: "new State"
}

//==publish
store.dispatch(action);

console.log("After dispatch: ", store.getState());

//action, state 를 파라미터로 받아 reducer가 state 를 update하고, 변경이 일어났다면 state를 subscriber에게 push한다.
//reducer(state, action) => if(state != prevState) push(state, toSubscriber)


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
