import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withMediaProps from './with-media-props'
import './App.css';

class Progress extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.progress !== media.progress
  }

  render() {
    const { media } = this.props
    return (
      <progress className="progress" style={{top: "15px",
      marginLeft:-140,
      width: "1000px",
      height: "5px",
        
      }}
        max={100}
        value={media.progress * 100}
      />
    )
  }
}

export default withMediaProps(Progress)
