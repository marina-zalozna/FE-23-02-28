import { createStore } from 'redux';
import { userReducer } from '../store/reducer/userReducer';

export const store = createStore(userReducer);
