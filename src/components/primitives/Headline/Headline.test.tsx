import * as React from 'react';
import { shallow } from 'enzyme';

import Headline from './Headline';

describe('Headline component', () => {
  
  it('should render elements', () => {
    
    const app = shallow(
      <Headline>howdy</Headline>
    );
    const content = app.find('.headline__wrapper');
    expect(content.length).toEqual(1);
  });
});
