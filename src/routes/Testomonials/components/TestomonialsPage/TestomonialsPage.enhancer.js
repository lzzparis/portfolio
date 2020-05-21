import { compose } from 'redux'
import { connect } from 'react-redux'
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect'

export default compose(
  // create listener for testomonials, results go into redux
  // firebaseConnect([{ path: 'testomonials' }]), 
  // // map redux state to props
  // connect(({ firebase: { data } }) => ({
  //   testomonials: data.testomonials
  // }))
)
