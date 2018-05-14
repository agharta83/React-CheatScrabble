/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */


/*
 * Code
 */
const Letter = ({ letter }) => (
  <div className="letter">
    <div className="letter-symbol">{letter}</div>
  </div>
);
Letter.propTypes = {
  letter: PropTypes.string.isRequired,
};


/*
 * Export default
 */
export default Letter;
