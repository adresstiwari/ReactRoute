import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Founder from './components/Founder/Founder.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './User/User.jsx'
import Github from './Github/Github.jsx'
import Login from './components/Login/Login.jsx'
import ForgetPassword from './components/ForgetPassword/ForgetPassword.jsx'
import SignUp from './components/SignUp/SignUp.jsx'

// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"founder",
//         element:<Founder/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='founder' element={<Founder/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='login/forgetPassword' element={<ForgetPassword/>}/>
      <Route path='login/signUp' element={<SignUp/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
