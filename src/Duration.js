import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withMediaProps from './with-media-props'
import formatTime from './format-time'

class Duration extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.duration !== media.duration
  }

  render() {
    const { className, style, media } = this.props
    return (
      <time className={className} style={{}}>
        {formatTime(media.duration)}
      </time>
    )
  }
}

export default withMediaProps(Duration)
