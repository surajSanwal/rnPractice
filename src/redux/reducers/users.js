const initialState = {
  isLoggedIn: false,
  data: [],
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return {...state, isLoggedIn: true};
    case 'logout':
      return {...initialState};
    default:
      return state;
  }
};

export default user;
