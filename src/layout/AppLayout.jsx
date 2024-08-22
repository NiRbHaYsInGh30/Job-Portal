import { Outlet } from "react-router-dom"
import "../App.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
      <Header/>
      <Outlet/>
      </main>
      <Footer/> 
      
    </div>
  )
}

export default AppLayout
