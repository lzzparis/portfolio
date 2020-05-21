import React from 'react'
import PropTypes from 'prop-types'
import classes from './TestomonialsPage.scss'

function TestomonialsPage({ testomonials }) {
  return (
    <div className={classes.container}>
      <span>TestomonialsPage Component</span>
      <pre>{JSON.stringify(testomonials, null, 2)}</pre>
    </div>
  )
}

TestomonialsPage.propTypes = {
  testomonials: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default TestomonialsPage
