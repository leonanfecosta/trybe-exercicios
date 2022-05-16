import { SEARCH_BEGIN, SEARCH_SUCESS, SEARCH_ERROR } from '../actions/characterActions';

const initialState = {
  loading: false,
  character: '',
}

function characterReducer (state = initialState, action) {
  switch (action.type) {
    case SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case SEARCH_SUCESS:
      return {
        ...state,
        loading: false,
        character: action.character[0],
      }
    case SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export default characterReducer;