/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Letter from 'src/components/Letter';


/*
 * Code
 */
const Word = ({ word }) => (
  <div className="word">
    {Array.from(word).map((letter, index) => (
      <Letter key={index} letter={letter} />
    ))}
  </div>
);
Word.propTypes = {
  word: PropTypes.string.isRequired,
};


/*
 * Export default
 */
export default Word;
