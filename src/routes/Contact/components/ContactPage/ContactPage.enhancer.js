import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';

export default compose(
  // create listener for contact, results go into redux
  // firebaseConnect([{ path: 'contact' }]),
  // // map redux state to props
  // connect(({ firebase: { data } }) => ({
  //   contact: data.contact
  // }))
);
