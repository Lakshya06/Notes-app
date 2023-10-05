import React from "react"
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import Test from "./Components/Test"

function App(){

  const [sideBar, setSideBar] = React.useState(true)

  return (
    <div>
      <Header sideBar={sideBar} setSideBar={setSideBar}/>
      {/* <Test /> */}
      <Main sideBar={sideBar} setSideBar={setSideBar}/>
      <Footer />
    </div>
  )
}

export default App