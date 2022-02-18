import {combineReducers} from 'redux'
import bankReducer from './bankReducers'

const reducer = combineReducers({
    bank:bankReducer
});

export default reducer;
export type RootState = ReturnType<typeof reducer>