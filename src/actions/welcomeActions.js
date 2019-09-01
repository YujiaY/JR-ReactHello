import axios from 'axios';
// import thunk from 'redux-thunk';

export const ADD_WELCOME = 'ADD_WELCOME';
export const GET_WELCOME = 'GET_WELCOME';
export const GET_WELCOME_SUCCESS = 'GET_WELCOME_SUCCESS';
export const GET_WELCOME_FAILURE = 'GET_WELCOME_FAILURE';


export function getWelcome() {
  return {
    type: GET_WELCOME
  };
}

export function getWelcomeSuccess(welcomeList) {
  return {
    type: GET_WELCOME_SUCCESS,
    payload: {welcomeList},
  }
}

export function getWelcomeFailure() {
  return {
    type: GET_WELCOME_FAILURE
  }
}

//1. dispatch getWelcome;
//2. dispatch getWelcomeSuccess
export function getWelcomeAsync() {
  return (dispatch) => {
    dispatch(getWelcome());
    axios.get('https://jr-posts.herokuapp.com/v1/posts')
      .then((res) => dispatch(getWelcomeSuccess(res.data)))
      .catch(err => dispatch(getWelcomeFailure()))
  }
}

