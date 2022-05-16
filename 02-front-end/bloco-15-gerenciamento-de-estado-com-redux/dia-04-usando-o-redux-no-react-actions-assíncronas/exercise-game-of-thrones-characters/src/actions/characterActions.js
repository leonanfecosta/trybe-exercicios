import charAPI from '../services/charAPI';

export const SEARCH_SUCESS = 'SEARCH_SUCESS';
export const SEARCH_BEGIN = 'SEARCH_BEGIN';
export const SEARCH_ERROR = 'SEARCH_ERROR';

export const searchBegin = (character) => ({
  type: SEARCH_BEGIN,
  loading: true,
  character,
});

export const searchSuccess = (character) => ({
  type: SEARCH_SUCESS,
  loading: false,
  character,
});

export const searchError = (error) => ({
  type: SEARCH_ERROR,
  loading: false,
  error,
});


export function thunkCharacter(name) {
  return (dispatch) => {
    dispatch(searchBegin());
    return charAPI(name).then((character) => dispatch(searchSuccess(character))), (error) => dispatch(searchError(error));
  }
}