import * as React from 'react';
import { mount } from 'enzyme';
import { Provider, Subscribe } from 'unstated';

// import App from './App';
import FlashCardsContainer from './containers/FlashCardsContainer';
import FlashCardsList from './components/FlashCardsList/';

describe('App component', () => {
  
  it('calls fetchFlashCards to populate list', () => {
    let cardContainer = new FlashCardsContainer();
    cardContainer.fetchFlashCards = jest.fn(() => []);
    let tree = mount(
      (
        <Provider inject={[cardContainer]}>
          <Subscribe to={[FlashCardsContainer]}>
            {( {state: {cards, isLoading} }) => (
              <FlashCardsList 
                cards={cards} 
                cardContainer={cardContainer}
                isLoading={isLoading}
              />
            )}
          </Subscribe>
        </Provider>
      )
    );

    expect(cardContainer.fetchFlashCards['mock'].calls.length).toEqual(1);

    // loader is not visible since we changed the state in the fetchFlashCards call
    const loader = tree.find('.loader');
    expect(loader.length).toEqual(0);
  });
});
