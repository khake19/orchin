import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { homeMiddleware } from '../home/duck';
import promiseMiddleware from '../middlewares/promiseMiddleware';

const history = createHashHistory();

const reduxListener = (dispatch, getState) => {
  console.log('redux listener', getState());
};

const configureStore = initialState => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Thunk Middleware
  middleware.push(thunk);

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== 'test') {
    middleware.push(logger);
  }

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // add home middlware
  middleware.push(homeMiddleware);
  middleware.push(promiseMiddleware);
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://extension.remotedev.io/docs/API/Arguments.html
      })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(
      './reducers',
      () => store.replaceReducer(require('./reducers')) // eslint-disable-line global-require
    );
  }

  reduxListener(store.dispatch, store.getState);
  return store;
};

export default { configureStore, history };
