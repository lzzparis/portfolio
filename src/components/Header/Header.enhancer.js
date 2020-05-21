import { compose } from 'redux';
import { withProps } from 'recompose';

export default compose(
  withProps({
    name: 'Lizzie Paris',
    imageUrl: '',
  }),
);
