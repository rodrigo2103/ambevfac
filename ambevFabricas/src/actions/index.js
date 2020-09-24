import { SET_TOKEN, REMOVE_TOKEN } from './actionTypes';
export const setToken = value => ({
  type: SET_TOKEN,
  token: value
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
  token: undefined
});
