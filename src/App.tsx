import * as React from 'react';
import { Provider, Subscribe } from 'unstated';

import Layout from './components/Layout/';
import FlashCardsContainer from './containers/FlashCardsContainer';
import FlashCardsList from './components/FlashCardsList/';

class App extends React.Component<{}, {}> {

  render() {
    let cardContainer = new FlashCardsContainer();
    return (
      <Provider inject={[cardContainer]}>
        <Subscribe to={[FlashCardsContainer]}>
          {( {state: {cards, isLoading} }) => (
            <Layout>
              <FlashCardsList 
                cards={cards} 
                cardContainer={cardContainer}
                isLoading={isLoading}
              />
            </Layout>
          )}
        </Subscribe>
      </Provider>
    );
  }
}

export default App;
