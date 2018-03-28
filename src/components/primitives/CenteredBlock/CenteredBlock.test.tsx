import * as React from 'react';
import { shallow } from 'enzyme';

import CenteredBlock from './CenteredBlock';

describe('CenteredBlock component', () => {
  
  it('should render elements', () => {
    
    const app = shallow(
      <CenteredBlock>children content</CenteredBlock>
    );
    const content = app.find('.centered-block');
    expect(content.length).toEqual(1);
  });
});
