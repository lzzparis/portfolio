import React from 'react'
import PropTypes from 'prop-types'
import classes from './ProjectsPage.scss'

function ProjectsPage({ projects }) {
  return (
    <div className={classes.container}>
      <span>ProjectsPage Component</span>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    </div>
  )
}

ProjectsPage.propTypes = {
  projects: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default ProjectsPage
