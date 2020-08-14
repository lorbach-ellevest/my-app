import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { loadItems } from 'actions/itemActions.js'

import { MediaProvider } from 'context/MediaContext'

import configureStore from 'store/configureStore'

import App from 'App.jsx'

const BREAKPOINTS = {
  SM: '(max-width: 767px)',
  MD: '(max-width: 1024px) and (min-width: 768px)',
  LG: '(min-width: 1024px)',
}

const store = configureStore();

store.dispatch(loadItems());

ReactDOM.render(
	<Provider store={store}>
		<MediaProvider breakpoints={BREAKPOINTS}>
			<App />
		</MediaProvider>
	</Provider>,
	document.getElementById('app')
)
