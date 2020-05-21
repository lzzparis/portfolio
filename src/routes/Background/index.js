import { Loadable } from '../../utils/components'; // TODO lzz
import { BACKGROUND_PATH as path } from '../../constants/paths'; // TODO lzz

export default {
  path,
  component: Loadable({
    loader: () => import(/* webpackChunkName: 'Background' */ './components/BackgroundPage'),
  }),
};
