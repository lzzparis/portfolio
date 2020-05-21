import React from 'react'
import PropTypes from 'prop-types'
import classes from './ContactPage.scss'

function ContactPage({ contact }) {
  return (
    <div className={classes.container}>
      <span>ContactPage Component</span>
      <pre>{JSON.stringify(contact, null, 2)}</pre>
    </div>
  )
}

ContactPage.propTypes = {
  contact: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default ContactPage
