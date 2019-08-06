import React, { Component } from 'react'
import { Media, Player } from 'react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'
import CurrentTime from './CurrentTime'
import SeekBar from './SeekBar'
import Duration from './Duration'
import Volume from './Volume'
import './songslist.css';
import './App1.css';







export default class MediaPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs_list: [],
      song: "http://localhost:5000/get_song?song_name=Addicted.mp3",
      // song: "this.props.x"
    }
  }
  componentDidMount() {
    fetch("http://localhost:5000/songs")
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
        <div>
          <div className="media-wrapper" style={{ marginLeft: 1050, marginTop:-580 }}>
            {this.state.songs_list.map((s) => (
              <ul>
                <button className="semi-transparent-button" style={{marginLeft:"-50px",marginTop:"-20px"}}
                  onClick={() => {
                    this.setState({
                      song: "http://localhost:5000/get_song?song_name=" + s.name
                    })
                  }}>
                  {s.name}
                </button>
              </ul>
            ))}
            </div>  
              <div className="controls" style={{ marginTop: "220px"}}>
                <div style={{ marginTop: "60px", marginLeft: "840px" }}> <MuteUnmute /></div>
                <div style={{ marginTop: "-30px", marginLeft: "850px" }}> <Volume /></div>
                <div  style={{ marginTop: "0px", marginLeft: "-40px" }}> <SeekBar /></div>
                <div style={{ fontSize: 24, color: "yellow", marginTop: "-10px", marginLeft: "-860px" }}> <CurrentTime /></div>
                <div style={{ fontSize: 24, color: "yellow", marginTop: "-30px", marginLeft: "880px" }}> <Duration /></div>
                <div style={{ marginTop: "-40px", marginLeft: "450px" }}> <PlayPause /></div>
                </div>
          <div>
            <Player src={this.state.song} />
          </div>






        </div>

      </Media >


    )
  }
}