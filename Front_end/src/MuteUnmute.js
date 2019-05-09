import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withMediaProps from './with-media-props'
import mute from "./images/mute.png";
import Unmute from "./images/unmute.png";
import './App.css';

class MuteUnmute extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isMuted !== media.isMuted
  }

  _handleMuteUnmute = () => {
    this.props.media.muteUnmute()
  }

  render() {
    const { media } = this.props
    return (
      <button type="button" className="mute" style={{width:"20", height:"20" ,borderRadius: "100%"}}
        onClick={this._handleMuteUnmute}
      >
        {media.isMuted ? <img src={mute} width="20" height="20" /> : <img src={Unmute} width="20" height="20" />}
      </button>
    )
  }
}

export default withMediaProps(MuteUnmute)
