import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import * as actions from './actions';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const logger = createLogger({
  collapsed: true,
});

// export const addTokenToLocalStorage = store => next => action => {
//   if(action.type === LOGIN_SUCCESS)
// }

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);
// store.dispatch(actions.loginRequest('Lambda School', 'i<3Lambd4'));
// store.dispatch(actions.addFriend());
// store.dispatch(actions.deleteFriend());
// store.dispatch(actions.updateFriend());

// store.dispatch(actions.addFriendSuccess());
// store.dispatch(actions.deleteFriendSuccess());
// store.dispatch(actions.deleteFriendFailure('An error occurred.'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
