import { Loadable } from '../../utils/components';
import { PROJECTS_PATH as path } from '../../constants/paths';

export default {
  path,
  component: Loadable({
    loader: () => import(/* webpackChunkName: 'Projects' */ './components/ProjectsPage'),
  }),
};
