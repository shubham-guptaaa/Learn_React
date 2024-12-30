import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
// const ReactElement = {
//   type: 'a',
//   props: { //object
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Vist Google</a>
)
 
createRoot(document.getElementById('root')).render(  //createRoot brouser like DOM create krta hai
  <StrictMode>
    <MyApp /> 
  </StrictMode>,
)
