import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App.jsx'
import './index.css'
import { store } from './store/index.js'
import { Provider } from 'react-redux'
import { Flowbite } from 'flowbite-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Flowbite>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Flowbite>
  </React.StrictMode>
)
