// Middleware ajax
/**
 * npm import
 */
import axios from 'axios';

/**
 * Local import
 */
import { LETTER_ADD, receivedWords, changeStatus } from './reducer';


/**
 * Code
 */
const url = 'http://localhost:3000/words';

const ajax = store => next => (action) => {
  // Passage au voisin
  next(action);

  switch (action.type) {
    case LETTER_ADD: {
      // Je récup le state
      const state = store.getState();

      // Une fois que j'ai 7 lettres
      if (state.letters.length === 7 && state.status === 'typing') {
        // Modifier le Board (status typing==>loading)
        store.dispatch(changeStatus());

        // AJAX avec axios
        axios
          .post(url, { letters: state.letters })
          .then(({ data }) => {
            // on dispatch une action avec la réponse du serveur
            store.dispatch(receivedWords(data));
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
      break;

    default:
      break;
  }
};
/**
 * Export
 */
export default ajax;
