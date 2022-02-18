import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreator,State } from './state';

function App() {
  const dispatch = useDispatch();
  const { depositeMoney ,withdrawMoney ,bankcruptMoney} = bindActionCreators(actionCreator,dispatch)
  const amount = useSelector((state:State) => state.bank)
  return (
    <div className="App">

        <h1>{amount}</h1>
        <button onClick={()=>depositeMoney(1000)}>Deposite</button>
        <button onClick={()=>withdrawMoney(500)}>Withdraw</button>
        <button onClick={()=>bankcruptMoney()}>Bankrupt</button>
    </div>
  );
}

export default App;
