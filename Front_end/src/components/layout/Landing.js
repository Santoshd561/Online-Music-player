import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../components/auth/Login.css'


import '../../NavHeader.css'

class Landing extends Component {
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
      <div>
       
          <div className="wrapper1">
          
          <div style={{marginTop:"-400px"}}>
        <div className="transparent_btn " style={{marginLeft:"1000px"}}>
            <Link style={{ textDecoration: 'none', color: 'white' }}
              to="/register"

            >
              SignUp
              </Link>
          </div>
          <div className="transparent_btn" >
            <Link style={{ textDecoration: 'none', color: 'white' }}
              to="/login"

            >
              SignIn
              </Link>
          </div>
          <div className="transparent_btn" >
            <Link style={{ textDecoration: 'none', color: 'white' }}
              to="/contact"

            >
              ContactUS
              </Link>
          </div>
          <div className="transparent_btn" >
            <Link style={{ textDecoration: 'none', color: 'white' }}
              to="/aboutUs"

            >
              About Us
              </Link>
          </div>
          </div>
          <div >
          
            <h1>
              <b>RHYTHM</b>
            </h1>

            <br />
            <p>Welcome to Rhythm Music App demo.This websites includes "Register-Page","Login-Page"<br />
              And a Songlist to Play.</p>

          </div>
          <div className="semi-transparent-button" style={{ marginTop: "40px" }}>
            <Link style={{ textDecoration: 'none', color: 'white' }}
              to="/home"

            >
              Play Now
              </Link>
          </div>
          
        </div>



        <div>

        </div>
      </div>
    );
  }
}

export default Landing;
