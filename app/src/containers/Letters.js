/**
 * npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
// Composant
import Letters from 'src/components/Letters';
// Action Creator
import { addLetter } from 'src/store/reducer';

/**
 * Code
 */
// Données : Données utiles venant du state de Redux
// 2 params state, ownProps
const mapStateToProps = state => ({
  letters: state.letters,
});

// Actions : Pour nodifier le state
// 2 params dispatch, ownProps

// Sans bindActionCreators
// const mapDispatchToProps = dispatch => ({
//   addLetter: (letter) => {
//     dispatch(addLetter(letter));
//   },
//   changeStatus: () => {
//     dispatch(changeStatus());
//   },
// });

// Avec bindActionCreators
const mapDispatchToProps = dispatch => (
  // renvoi un objet
  bindActionCreators({ addLetter }, dispatch)
);

// IMPLEMENTATION APPROXIMATIVE !
// => https://github.com/reduxjs/redux/blob/87071fd4ab71acc4fdd8b3db37d2d7ff08b724a3/src/bindActionCreators.js#L28
// const bindActionCreators = (actions, dispatch) => {
//   const obj = {};
//   Object.keys(actions).forEach((key) => {
//     obj[key] = (...args) => {
//       dispatch(actions[key](...args));
//     };
//   });
//   return obj;
// };


const LettersContainer = connect(
  mapStateToProps, // Recup des donnees
  mapDispatchToProps, // Recup des actions
)(Letters);

/**
 * Export
 */
export default LettersContainer;
