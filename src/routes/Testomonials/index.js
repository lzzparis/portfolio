import { Loadable } from '../../utils/components'
import { TESTOMONIALS_PATH as path } from '../../constants/paths'

export default {
  path,
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Testomonials' */ './components/TestomonialsPage')
  })
}
