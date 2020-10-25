import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducer, initialState } from './reducer'

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

// OLD VERSION
export default function configureStore(initialState = initialState) {
  return createStore(Reducer, initialState);
}
