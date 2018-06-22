/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Word from 'src/components/Word';

/*
 * Code
 */
const Board = ({ status, words }) => (
  <div id="board">
    {status === 'typing' && <div id="board-image" />}
    {status === 'loading' &&
      <div id="board-words">
        <Word word="loading" />
      </div>
    }
    {status === 'loaded' &&
      <div id="board-words">
        {words.length > 0 && words.map(word => (
          <Word key={word} word={word} />
        ))}
        {words.length === 0 &&
          <Word word="not found" />
        }
      </div>
    }
  </div>
);
Board.propTypes = {
  status: PropTypes.oneOf(['typing', 'loading', 'loaded']).isRequired,
  words: PropTypes.array.isRequired,
};


/*
 * Export default
 */
export default Board;
