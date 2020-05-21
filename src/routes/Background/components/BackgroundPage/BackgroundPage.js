import React from 'react'
import PropTypes from 'prop-types'
import classes from './BackgroundPage.scss'

function BackgroundPage({ background }) {
  return (
    <div className={classes.container}>
      <span>BackgroundPage Component</span>
      <pre>{JSON.stringify(background, null, 2)}</pre>
    </div>
  )
}

BackgroundPage.propTypes = {
  background: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default BackgroundPage
