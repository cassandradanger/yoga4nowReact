const posesReducer = (state = [], action) => {
  console.log("REDUCER", action.payload)
  switch (action.type) {
    case 'SET_POSES':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default posesReducer;
