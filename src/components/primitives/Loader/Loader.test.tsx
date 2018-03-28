import * as React from 'react';
import { shallow } from 'enzyme';

import Loader from './Loader';

describe('Loader component', () => {
  
  it('should render elements', () => {
    
    const app = shallow(
      <Loader>children content</Loader>
    );
    const content = app.find('.loader');
    expect(content.length).toEqual(1);
  });
});
