import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.jsx'
import Store from './Todo/Store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
