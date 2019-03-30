import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import rootReducer from './rootReducer';

const persistConfig = {
	key: 'nobigdeal',
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
	let store = createStore(persistedReducer, applyMiddleware(thunk))
	let persistor = persistStore(store)
	return { store, persistor }
}