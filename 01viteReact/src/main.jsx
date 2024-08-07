import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom app</h1>
    </div>
  )
}

// const ReactElement = {

//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit google</a>
)

const anotherUser = "Raghav"

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

// React.createElement Method is injected by babble (transfiler).