const purposeReducer = (state = [], action) => {
  console.log("REDUCER", action.payload)
  switch (action.type) {
    case 'SET_PURPOSE':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default purposeReducer;
