import { React, Component } from "react"
import Menu from "../components/Menu"
import Frame from "./Frame"
import Image from "../assets/get-started-colored-.png"

class App extends Component {
  render() {
    return(
      <>
        <Menu />
        <Frame>
          <div className="flex flex-col items-center">
            <img src={Image} width="320px" alt="Feature" />
          </div>
          <div id="actions" className="flex flex-row justify-center my-16">
            <div className="bg-orange-500 inline text-white px-6 py-3 rounded-full">
              Get Started
            </div>
          </div>
        </Frame>
      </>
    )
  }
}

export default App