import React from 'react'
import PropTypes from 'prop-types'

const Recorded = ({ src, controls, autoPlay}) => {
  return <audio src={src} controls={controls} autoPlay={autoPlay} data-testid={'audio'}></audio>
}

Recorded.propTypes = {
  src: PropTypes.string,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
}

export default Recorded
