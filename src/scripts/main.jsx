import React from 'react'
import ReactDOM from 'react-dom/client'
import { RotatingLines } from 'react-loader-spinner'
import App from './components/App.jsx'
import '../stylesheets/css/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <RotatingLines
      visible={true}
      height="156"
      width="156"
      color="#fff"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass="loader"
    />,
    {/* <App /> */}
  </React.StrictMode>,
)

setTimeout(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}, 700);