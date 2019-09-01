import { GET_WELCOME, GET_WELCOME_SUCCESS, GET_WELCOME_FAILURE } from "../actions/welcomeActions";

const initialState = {
  welcomeList: [
    {
      name: "List Nick",
      isTeacher: true,
    }, {
      name: "List Jack",
      isTeacher: false
    },{
      name: "List Tim",
      isTeacher: false
    },
  ],
  isFetching: false
}

const  welcomeReducer = (state = initialState, action) => {
  console.log('Welcome Reducer...')
  if (action.type === GET_WELCOME) {
    return Object.assign({}, state, {
      isFetching: true,
    })
  }  else if (action.type === GET_WELCOME_SUCCESS) {
    console.log(action.payload.welcomeList)
      return Object.assign({}, state, {
        welcomeList: action.payload.welcomeList,
        isFetching: false
      })
  } else if (action.type === GET_WELCOME_FAILURE) {
    return Object.assign({}, state, {
      isFetching: false
    })
  }
  return state;
}


export default welcomeReducer;
