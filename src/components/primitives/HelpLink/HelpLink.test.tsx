import * as React from 'react';
import { shallow } from 'enzyme';

import HelpLink from './HelpLink';

describe('HelpLink component', () => {
  
  it('should render elements', () => {
    
    const app = shallow(
      <HelpLink 
        // tslint:disable-next-line:no-empty
        clickHandler={() => {}}
        text="helpful text"
      />
    );
    const content = app.find('.help-link');
    expect(content.length).toEqual(1);
  });
});
