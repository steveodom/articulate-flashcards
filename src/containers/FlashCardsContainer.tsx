import { Container } from 'unstated';
import { FlashCardsList } from './../models/FlashCards';
import { fetchCards } from './../api';

export interface FlashCardsContainerInterface {
  fetchFlashCards(): void;
}

interface ContainerState {
  isLoading: boolean;
  cards: FlashCardsList;
}

export default class FlashCardsContainer extends Container<ContainerState> {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      cards: []
    };
  }

  public async fetchFlashCards() {
    this.setState({ isLoading: true });

    fetchCards().then( (res: FlashCardsList) => {
      this.setState({cards: res, isLoading: false});
    });
  }
}