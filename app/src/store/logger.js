/**
 * middleware logger
 */

// store : store partiel : getState(), dispatch()
// next : c'est le prochain middleware ou le reducer
// action : {type: .... }
const logger = store => next => (action) => {
  console.log('---- MiddleWare Logger ----');

  console.log(action);

  // Passes à ton voisin
  next(action);
};

/**
 * export
 */
export default logger;
