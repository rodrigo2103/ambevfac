import { tokenReducer } from './tokenReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
    setToken: tokenReducer,
});
