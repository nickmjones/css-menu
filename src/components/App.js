import { React, Component } from "react"
import Menu from "../components/Menu"
import Frame from "./Frame"
import HomeCard from "./HomeCard"

class App extends Component {
  render() {
    return(
      <>
        <Menu />
        <Frame>
          <HomeCard/>
        </Frame>
      </>
    )
  }
}

export default App