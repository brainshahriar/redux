import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreator } from './state';
import  State  from './state/reducers/index';

function App() {
  const dispatch = useDispatch();
  const { depositeMoney ,withdrawMoney ,bankcruptMoney} = bindActionCreators(actionCreator,dispatch)
  const amount = useSelector((state:State) => state.bank)
  return (
    <div className="App">

        <h1>{amount}</h1>
        <button>Deposite</button>
        <button>Withdraw</button>
        <button>Bankrupt</button>
    </div>
  );
}

export default App;
