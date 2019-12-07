import React from 'react';
import './App.css';
import {connect, useSelector, useDispatch} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  console.log(props);

  const products = useSelector(state => state.product);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>{user}</p>
      <p>{products}</p>
      <button onClick={() => dispatch(updateUser('LDK'))}>액션 디스패치 테스트</button>
    </div>
  );
}

export default App;
/*
const mapStateToProps = (state) => ({
  //왼쪽이 props, 오른쪽이 store의 state
  products: state.products,
  user: state.user
});

//(action을 dispatch하는)function을 props로 mapping
const mapActionToProps = (dispatch) => ({
  //왼쪽이 props, 오른쪽이 (action을 dispatch하는)function
  updateUser: (name) => dispatch(updateUser(name))
});

//curryng function - method chaining
//HoC : 입력파라미터에 컴포넌트를 넣어서 새로운 기능의 컴포넌트를 리턴하는 함수

export default connect(mapStateToProps, mapActionToProps)(App);
*/
