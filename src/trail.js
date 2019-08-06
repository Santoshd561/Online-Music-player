import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Drawer } from 'react-mdl';
import Faq from './images/Faq.png';
import aboutme from './images/Aboutme.png';
import Login from './images/login.png'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";




class Trail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs_list: [],
      songs: [],

    }
  }


  filterBy = str => {
    this.setState({ songs: [] });
    let results = this.state.songs_list.filter(obj => {
      return
    });
    this.setState({ songs: results });
  }

  render() {
    return (
      <div >
        
          <Drawer title={

            <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Menu</Link>

          }>
            <Navigation >
              <div>
                <Link to="/login" ><img src={Login} width="30" height="30" />Login</Link>
              </div>
            </Navigation>
          </Drawer>
       



      </div>

    );
  }
}

export default Trail;