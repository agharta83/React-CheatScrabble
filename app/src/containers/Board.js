/**
 * npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
// Composant
import Board from 'src/components/Board';

/**
 * Code
 */
// Données : Données utiles venant du state de Redux
// 2 params state, ownProps
const mapStateToProps = state => ({
  status: state.status,
  words: state.words,
});

// Actions : Pour nodifier le state
// 2 params dispatch, ownProps
const mapDispatchToProps = {};

const BoardContainer = connect(
  mapStateToProps, // Recup des donnees
  mapDispatchToProps, // Recup des actions
)(Board);

/**
 * Export
 */
export default BoardContainer;
