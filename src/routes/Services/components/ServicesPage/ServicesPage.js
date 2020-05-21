import React from 'react'
import PropTypes from 'prop-types'
import classes from './ServicesPage.scss'

function ServicesPage({ services }) {
  return (
    <div className={classes.container}>
      <span>ServicesPage Component</span>
      <pre>{JSON.stringify(services, null, 2)}</pre>
    </div>
  )
}

ServicesPage.propTypes = {
  services: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default ServicesPage
