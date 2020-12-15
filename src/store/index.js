import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
