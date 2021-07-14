import { ACTIONS } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.favorite:
      return {
        ...state,
        myList: [...state.myList, action.payload]
      };
    case ACTIONS.delete:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload)
      };
    case ACTIONS.login:
      return {
        ...state,
        user: action.payload
      };
    case ACTIONS.logout:
      return {
        ...state,
        user: action.payload
      };
    case ACTIONS.register:
      return {
        ...state,
        user: action.payload
      };
    case ACTIONS.video:
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          []
      };
    default:
      return state;
  }
};

export default reducer;
