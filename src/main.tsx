import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import 'bootstape/dist/css/bootstrap.min.css'
// import 'bootstape/dist/js/bootstrap.bundle.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
//import DemoClass from './ClassDemo.tsx'
import UseState from './components/UseState.tsx';
import Users from './components/Users.tsx';
import Home from './components/Home.tsx';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound.tsx';
import UserProfile from './components/UserProfile.tsx';

const AppRoute = createBrowserRouter([
  {path: "/",element: <App />,
    children: [
      {path: "/",element:<Home/>,},
      {path: "/like",element: <UseState />,},
      {path: "/users",element: <Users/>,},
      {path: "/user/:id",element: <UserProfile/>,},
    ]},
  {path: "/login",element: <Login/>,},
  {path:"*",element:<PageNotFound/>},
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={AppRoute} />
  </StrictMode>,
)
