import * as React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';

describe('Layout component', () => {
  
  it('should render elements', () => {
    const app = shallow(
      <Layout>children content</Layout>
    );
    const content = app.find('.layout__content');
    expect(content.length).toEqual(1);
  });
});
