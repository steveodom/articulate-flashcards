import * as React from 'react';
import { FlashCardsList } from './../../models/FlashCards';
import { FlashCardsContainerInterface } from './../../containers/FlashCardsContainer';

import FlashCard from './../FlashCard';
import Loader from './../primitives/Loader/';

import './style.css';

type QuizProps = {
  cards: FlashCardsList,
  cardContainer: FlashCardsContainerInterface,
  isLoading: boolean
};

export default class FlashCards extends React.Component<QuizProps, {}> {
  
  componentDidMount() {
    this.props.cardContainer.fetchFlashCards();
  }

  render() {
    const {cards, isLoading} = this.props;
    const visibilityClass = isLoading ? 'flashcards--hidden' : 'flashcards--visible';
    return (
      <div>
        {isLoading && <Loader />}
        <div className={`flashcards ${visibilityClass}`}>
          {cards.map( (card, i) => {
            return (
              <FlashCard key={i} card={card} showHelper={i === 0}/>
            );
          })}   
        </div>
      </div>
    );
  }
}