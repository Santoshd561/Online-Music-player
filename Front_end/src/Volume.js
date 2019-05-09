import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withMediaProps from './with-media-props'
import './App.css';

class Volume extends Component {
  _onChangeUsed = false

  shouldComponentUpdate({ media }) {
    return this.props.media.volume !== media.volume
  }

  _handleMouseUp = ({ target: { value } }) => {
    if (!this._onChangeUsed) {
      this.props.media.setVolume((+value).toFixed(4))
    }
  }

  _handleChange = ({ target: { value } }) => {
    this.props.media.setVolume((+value).toFixed(4))
    this._onChangeUsed = true
  }

  render() {
    const { style, media } = this.props
    const { volume } = media
    return (
      <input
        type="range"
        step="any"
        min={0}
        max={1}
        value={volume}
        onMouseUp={this._handleMouseUp}
        onChange={this._handleChange}
        className="volume" style={{ width:"60px",height:"10px",
          backgroundSize: volume * 200 / 1 + '% 100%',
          ...style,
        }}
      />
    )
  }
}

export default withMediaProps(Volume)
