import { Loadable } from '../../utils/components';
import { CONTACT_PATH as path } from '../../constants/paths';

export default {
  path,
  component: Loadable({
    loader: () => import(/* webpackChunkName: 'Contact' */ './components/ContactPage'),
  }),
};
