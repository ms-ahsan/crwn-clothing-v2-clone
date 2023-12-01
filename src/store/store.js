import { compose, createStore, applyMiddleware } from 'redux';

// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

//middleware
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentstate', store.getState());

  next(action);

  console.log('next state:', store.getState());
};

const middleware = [loggerMiddleware];

const composeEnhancers = compose(applyMiddleware(...middleware));

//root reducer

export const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers
);
