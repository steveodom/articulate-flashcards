
import FlashCardsContainer from './FlashCardsContainer';

describe('FlashCards container', () => {
  
  it('should handle state', () => {
    let container = new FlashCardsContainer();
    expect(container.state.cards.length).toEqual(0); 
    expect(container.state.isLoading).toEqual(false);
  });
});