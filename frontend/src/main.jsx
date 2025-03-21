
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/global.module.scss";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import  store  from  '../src/stores/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
