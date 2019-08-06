import React, { Component } from 'react';
import { Media, Player } from 'react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import CurrentTime from './CurrentTime'
import SeekBar from './SeekBar'
import Duration from './Duration'
import Volume from './Volume'
import './Artist.css';
import arman from './photoco/arman.jpg';



export default class Arman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs_list: [],
      song: "http://localhost:5000/get_song?song_name=Arose",
      
    }
  }
  componentDidMount() {
    fetch("http://localhost:5000/arman_songs")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          songs_list: responseJson
        })
      })
  }
  render() {
    return (
      <Media>
        <div className="wrapper">
          <div className="form-wrapper" >
          <h1>Arman Songs</h1>

            {this.state.songs_list.map((s) => (
              <ul>
                <button className="button" style={{marginLeft:"-400px",marginTop:"-20px"}}
                  onClick={() => {
                    this.setState({
                      song: "http://localhost:5000/getarman_song?song_name=" + s.name
                    })
                  }}>
                  {s.name}
                </button>
              </ul>
            ))}
             <div>
                <img src={arman} class="card-img-top" alt="h" style={{ width: "340px", height: "340px",marginLeft:"480px",marginTop:"-320px" }} />
                </div>
           
                <div className="media-controls" >
                <div style={{ marginTop: "10px", marginLeft: "780px" }}> <MuteUnmute /></div>
                <div style={{ marginTop: "-40px", marginLeft: "800px" }}> <Volume /></div>
                <div style={{ marginTop: "0px", marginLeft: "0px" }}> <SeekBar /></div>
                <div className="seekbar1" style={{ fontSize: 24, color: "yellow", marginTop: "-10px", marginLeft: "-860px" }}> <CurrentTime /></div>
                <div style={{ fontSize: 24, color: "yellow", marginTop: "-30px", marginLeft: "800px" }}> <Duration /></div>
                <div style={{ marginTop: "-40px", marginLeft: "450px" }}> <PlayPause /></div>



              
            </div>
          </div>
          <div>
            <Player src={this.state.song} />
          </div>






        </div>

      </Media >


    )
  }
}