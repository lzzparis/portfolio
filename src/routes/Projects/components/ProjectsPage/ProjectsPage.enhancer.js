import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';

export default compose(
  // create listener for projects, results go into redux
  // firebaseConnect([{ path: 'projects' }]),
  // // map redux state to props
  // connect(({ firebase: { data } }) => ({
  //   projects: data.projects
  // }))
);
