import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Layout from './../../components/Layout/';

describe('Layout component', () => {
  
  it('should render elements', () => {
    const app = shallow(
      <Layout />
    );
    const content = app.find('.layout__content');
    expect(content.length).toEqual(1);
  })
});
