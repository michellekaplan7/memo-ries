import React from 'react'

export const Recorded = ({ src, controls, autoPlay}) => {
  return <audio src={src} controls={controls} autoPlay={autoPlay} role={'audio'}></audio>
}
