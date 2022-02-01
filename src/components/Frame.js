import { MenuIcon } from "@heroicons/react/outline"
import { XIcon } from "@heroicons/react/outline"
import { React, Component } from "react"

class Frame extends Component {
  constructor(props) {
    super(props)
    this.state = { isMenuOpe: false}
    this.handleMenuButton = this.handleMenuButton.bind(this);
  }

  handleMenuButton() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    return(
      <div className={this.state.isMenuOpen ? 'menu open' : 'menu'}>
        <div className="flex flex-row items-center p-4">
          <MenuIcon className={this.state.isMenuOpen ? 'h-5 w-5 text-gray-600 hidden' : 'h-5 w-5 text-gray-600'} onClick={ this.handleMenuButton } />
          <XIcon className={this.state.isMenuOpen ? 'h-5 w-5 text-gray-600' : 'h-5 w-5 text-gray-600 hidden'} onClick={ this.handleMenuButton } />
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Frame