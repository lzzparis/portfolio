import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';

export default compose(
  // create listener for background, results go into redux
  // firebaseConnect([{ path: 'background' }]),
  // map redux state to props
  // connect(({ firebase: { data } }) => ({
  //   background: data.background
  // }))
);
