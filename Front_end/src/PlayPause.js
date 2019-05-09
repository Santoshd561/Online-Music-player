import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withMediaProps from './with-media-props'
import play from "./images/playbuuton.png";
import pause from "./images/pause.png";
import './App.css';


class PlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }

  _handlePlayPause = () => {
    this.props.media.playPause()
  }

  render() {
    const { className, style, media } = this.props
    return (
      
      <button type="button" className="Playpause" style={{borderRadius: "50%"}}
      
        onClick={this._handlePlayPause}
      >
        {media.isPlaying ? <img src={pause} width="30" height="30" /> : <img src={play} width="30" height="30" />}
      </button>
    )
  }
}

export default withMediaProps(PlayPause)
