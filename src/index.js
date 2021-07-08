import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

import 'react-times/css/material/default.css'
import 'react-times/css/classic/default.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './assets/icons/fontawesome/css/all.min.css'
import './assets/sass/app.css'
import './assets/css/circle.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
