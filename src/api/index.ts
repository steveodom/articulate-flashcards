import { FlashCardsList } from './../models/FlashCards';
import { flashCards } from './mockData';

export const fetchCards = () => {
  return new Promise<FlashCardsList>( (resolve, reject) => {
    setTimeout( 
      () => { return resolve(flashCards); }, 
      800
    );
  });
};