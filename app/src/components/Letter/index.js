/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import { getLetterPoints } from 'src/datas/letters';

/*
 * Code
 */
const Letter = ({ letter }) => (
  <div className="letter">
    <div className="letter-symbol">{letter}</div>
    <div className="letter-points">{getLetterPoints(letter) || ''}</div>
  </div>
);
Letter.propTypes = {
  letter: PropTypes.string.isRequired,
};


/*
 * Export default
 */
export default Letter;
