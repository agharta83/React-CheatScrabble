/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Board from 'src/components/Board';
import Letters from 'src/components/Letters';


/*
 * Code
 */
const App = () => (
  <div id="app">
    <Board status="typing" />
    <Letters />
  </div>
);


/*
 * Export default
 */
export default App;
