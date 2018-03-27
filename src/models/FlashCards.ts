export interface FlashCardEntity {
  headline: string;
  headline_back?: string;
  img_src?: string;
  description?: string;
}

export interface FlashCardsList extends Array<FlashCardEntity> {}
