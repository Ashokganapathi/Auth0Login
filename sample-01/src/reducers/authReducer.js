const initialState = {
    ruser: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGGED_IN_USER':
        return {
          ...state,
          ruser: action.payload,
        };
      case 'CLEAR_LOGGED_IN_USER':
        return {
          ...state,
          ruser: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;