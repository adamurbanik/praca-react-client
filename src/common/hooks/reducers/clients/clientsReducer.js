export const clientsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CLIENTS':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_CLIENTS':
      return {
        ...state,
        clients: action.payload,
        isLoading: false,
        error: null,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
