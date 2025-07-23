import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./components/home.jsx"
import About from "./components/about.jsx"
import Contact from "./components/contact.jsx"
import Github,{githubInfoLoader} from "./components/github.jsx"
import User from "./components/user.jsx"


const router =createBrowserRouter([
  {path:"",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/about",element:<About/>,},
      {path:"/contact",element:<Contact/>},
      {path:"/github",element:<Github/>,loader:githubInfoLoader},
      {path:"/user/:userid?",element:<User/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
