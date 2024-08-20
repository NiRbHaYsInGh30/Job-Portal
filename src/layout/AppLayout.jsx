import { Outlet } from "react-router-dom"
import "../App.css"
import Header from "../components/Header"
const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
      <Header/>
      <Outlet/>
      </main>
      <div className="p-10 bg-gray-900 mt-100 ">
        <footer className="text-center">Copyright © 2024 Job Portal</footer>
      </div>
      
    </div>
  )
}

export default AppLayout
