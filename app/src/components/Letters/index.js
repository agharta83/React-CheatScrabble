/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local import
 */
import Letter from 'src/components/Letter';
import { isLetter } from 'src/datas/letters';

/*
 * Code
 */
class Letters extends React.Component {
  /**
   * PropTypes
   */
  static propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    addLetter: PropTypes.func.isRequired,
  }

  /**
   * Lifecycle
   */
  componentDidMount() {
    // Ecoute du keydown sur le document
    document.addEventListener('keydown', this.handleKey);
  }

  /**
   * Actions
   */
  handleKey = (evt) => {
    const { key } = evt;
    const { addLetter } = this.props;
    // Je passe en minuscule pour garantir le bon fonctionement de isLetter
    const keyPressed = key.toLowerCase();

    // Si le caractère est une lettre valide
    if (isLetter(keyPressed)) {
      addLetter(keyPressed);
    }
  }

  /**
   * Rendu
   */
  render() {
    // Recup du state
    const { letters } = this.props;

    return (
      <div id="letters">
        {letters.map((letter, index) => (
          <Letter key={index} letter={letter} />
        ))}
      </div>
    );
  }
}


/*
 * Export default
 */
export default Letters;
