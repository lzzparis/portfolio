import { Loadable } from '../../utils/components';
import { SERVICES_PATH as path } from '../../constants/paths';

export default {
  path,
  component: Loadable({
    loader: () => import(/* webpackChunkName: 'Services' */ './components/ServicesPage'),
  }),
};
