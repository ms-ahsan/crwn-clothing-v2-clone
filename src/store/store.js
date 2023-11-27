import { compose, createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

//middleware
const middleware = [logger];

const composeEnhancers = compose(applyMiddleware(...middleware));

//root reducer

export const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers
);
