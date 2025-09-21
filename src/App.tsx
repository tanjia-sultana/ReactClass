import Header from "./components/layout/Header"
//import Card from "./Card"
import Footer from "./components/layout/Footer"
import { Outlet } from "react-router-dom"
//import Event from "./Event"
//import PropsPage from "./components/PropsPage"
//import Loop from "./components/Loop"
//import UseState from "./components/UseState"


function App() {
  
  return (
    <>
      <Header/>
      <Outlet/>
      {/* <Loop/>
      <PropsPage/> */}
      <Footer/>
      {/* <Card/> 
       <Event/> */}
    {/* <UseState/> */}
    </>
  )
}

export default App
