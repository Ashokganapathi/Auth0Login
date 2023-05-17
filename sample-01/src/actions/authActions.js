 
  export const setLoggedInUser = (user) => {
    return {
      type: 'SET_LOGGED_IN_USER',
      payload: user,
    };
  };
  
  export const clearLoggedInUser = () => {
    return {
      type: 'CLEAR_LOGGED_IN_USER',
    };
  };
  