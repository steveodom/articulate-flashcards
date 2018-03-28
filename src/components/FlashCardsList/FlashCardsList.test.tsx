import * as React from 'react';
import { shallow } from 'enzyme';

import FlashCardsList from './FlashCardsList';
import FlashCardsContainer from './../../containers/FlashCardsContainer';

describe('FlashCards component', () => {
  
  it('should render elements', () => {
    const card = {
      headline: '', 
      headline_back: '', 
      img_src: '',
      description: ''
    };

    let cardContainer = new FlashCardsContainer();

    const app = shallow(
      <FlashCardsList 
        isLoading={false}
        cards={[card]}
        cardContainer={cardContainer}
      />
    );
    const content = app.find('.flashcards');
    expect(content.length).toEqual(1);
  });
});
