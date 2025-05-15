import { createStore } from 'redux'
import { counterReducer } from '../Redux/Reducer.jsx'

const store = createStore(counterReducer)

export default store;
