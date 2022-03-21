export default (state, action) => {
  switch (action.type) {
    case 'JOINED':
      return {
        ...state,
        isJoin: action.payload,
      };
    default:
      return state;
  }
};
