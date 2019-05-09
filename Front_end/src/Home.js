import React, { Component } from "react";
import MediaPlayer from './Mediaplayer';
import Search from './Search';
import Slider from './image_slider';
import Cimage from './photoco/cimage';
import { Button } from 'mdbreact';
import Image from './photoco/setiaI';
import Image1 from './photoco/armanI';
import AriJit from './photoco/arijitI';
import AtIf from './photoco/atifI';
import HoneySingh from './photoco/honey';
import Trail from './trail';
import { Link } from "react-router-dom";

import './App1.css'
import './songslist.css'
import './components/auth/Login.css'
import './Search.css'

class Home extends Component {
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
      <div>
        <div className="wrapper">
               <div>
                 
               <div>
              <Search filterBy={this.filterBy} />
            </div>
            

            <div className="form-wrapper-home">
            

              <div style={{ marginTop: "20px" }}>

                <Slider />
              </div>
              <div className="media">
                <MediaPlayer />
              </div>
              <div className="artist" style={{ marginTop: "-200px", marginLeft: "10px" }}>
                <div >
                  <h2 className="art">
                    Artist
							</h2>
                </div>
                <div >
                  <div >

                    <ul id="horizontal-list">


                      <li><Button><Cimage /></Button></li>
                      <li><Button><Image /></Button></li>
                      <li><Button><AriJit /></Button></li>
                      <li><Button><AtIf /></Button></li>
                      <li><Button><HoneySingh /></Button></li>
                      <li><Button><Image1 /></Button></li>


                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>




      </div>

    );
  }
}

export default Home;
