import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Reducer, initialState } from './reducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

export const ConfigureStore = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  };

  const persistedReducer = persistReducer(persistConfig, Reducer);

  const store = createStore(
    persistedReducer, // reducer
    initialState, // our initialState
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const persistor = persistStore(store);

  return { store, persistor };
}

// OLD VERSION
export default function configureStore(initialState = initialState) {
  return createStore(Reducer, initialState);
}
