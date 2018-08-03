import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {};

const middleware = [thunk];
const composeEnhancers = composeWithDevTools({
});


const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
      applyMiddleware(...middleware),
  )
);

export default store;