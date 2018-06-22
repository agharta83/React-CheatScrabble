/**
 * NPM inport
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local Import
 */
import reducer from './reducer';
import ajax from './ajaxMiddleware';

/**
 * Code
 */
// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

/**
 *  Middleware maison :D
 */
// Applique le middleware
const ajaxMiddleware = applyMiddleware(ajax);

// Le package des middleware // enhancers
const enhancers = compose(ajaxMiddleware, ...devTools);

const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
