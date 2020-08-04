import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { loadItems } from 'actions/itemActions.js'

import configureStore from 'store/configureStore'

import App from 'App.jsx'

const store = configureStore();

store.dispatch(loadItems());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)
