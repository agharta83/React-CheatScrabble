/**
 * initial state
 */
const initialState = {
  letters: [],
  words: [],
  status: 'typing', // 'typing', 'loading', 'loaded'
};

/**
 * Types
 */
export const LETTER_ADD = 'LETTER_ADD';
const CHANGE_STATUS = 'CHANGE_STATUS';
const RECEIVED_WORDS = 'RECEIVED_WORDS';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVED_WORDS:
      // Je stocke les mots provenant du serveur
      return {
        ...state,
        status: 'loaded',
        words: action.words,
      };

    case LETTER_ADD:
      if (state.status !== 'typing') {
        return state;
      }

      return {
        ...state,
        letters: [...state.letters, action.letter],
      };

    case CHANGE_STATUS:
      return {
        ...state,
        status: 'loading',
      };

    default:
      return state;
  }
};

/**
 * Action creators
 */
export const addLetter = letter => ({
  type: LETTER_ADD,
  letter,
});

export const changeStatus = () => ({
  type: CHANGE_STATUS,
});

export const receivedWords = words => ({
  type: RECEIVED_WORDS,
  words,
});

/**
 * Export
 */
export default reducer;
