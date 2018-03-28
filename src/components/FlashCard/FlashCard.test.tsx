import * as React from 'react';
import { shallow } from 'enzyme';

import FlashCard from './FlashCard';

describe('FlashCard component', () => {
  
  it('should render elements', () => {
    const card = {
      headline: '', 
      headline_back: '', 
      img_src: '',
      description: ''
    };

    const app = shallow(
      <FlashCard card={card} showHelper={true}/>
    );
    // console.log(app.debug());
    const content = app.find('.block-flashcard');
    expect(content.length).toEqual(1);
  });
});
