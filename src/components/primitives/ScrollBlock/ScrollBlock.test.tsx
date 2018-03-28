import * as React from 'react';
import { shallow } from 'enzyme';

import ScrollBlock from './ScrollBlock';

describe('ScrollBlock component', () => {
  
  it('should render elements', () => {
    
    const app = shallow(
      <ScrollBlock text="howdy" />
    );
    const content = app.find('.scroll-block');
    expect(content.length).toEqual(1);
  });
});
