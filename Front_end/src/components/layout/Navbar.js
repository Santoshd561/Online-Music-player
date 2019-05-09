import React, { Component } from "react";

import '../../NavHeader.css'

class Navbars extends Component {
  constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
  }
  toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

  render() {
    return (
      
      <div >
        <nav >
          <div >
            <p
              style={{
                fontFamily: "monospace",
                marginLeft:"-200px"
              }}
              
            >
            Rhythm
              </p>
          </div>
        </nav>
        
      </div>
    );
  }
}

export default Navbars;
