import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';

export default compose(
  // create listener for services, results go into redux
  // firebaseConnect([{ path: 'services' }]),
  // // map redux state to props
  // connect(({ firebase: { data } }) => ({
  //   services: data.services
  // }))
);
