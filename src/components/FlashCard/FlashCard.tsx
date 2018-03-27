import * as React from 'react';
import { FlashCardEntity } from './../../models/FlashCards';

import CenteredBlock from './../primitives/CenteredBlock/';
import ScrollBlock from './../primitives/ScrollBlock';
import Headline from './../primitives/Headline/';
import HelpLink from './../primitives/HelpLink/';

import './style.css';
import './../../brand.css';

interface CardProps {
  card: FlashCardEntity;
  showHelper: boolean;
}

interface CardState {
  isFlipped: boolean;
}

export default class FlashCard extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip() {
    this.setState({isFlipped: !this.state.isFlipped});
  }

  render() {
    const { card: {headline, headline_back, img_src, description }, showHelper} = this.props;
    const flippedClass = this.state.isFlipped ? 'block-flashcard--flipped' : '';
    const zIndex = this.state.isFlipped ? 1 : 0;
    const backgroundStyle = img_src ? {backgroundImage: `url(${img_src})`} : {};
    const backgroundClass = img_src ? 'block-flashcard--fullimage' : '';

    return (
      <section className={`block-flashcard ${flippedClass}`} style={{zIndex: zIndex}}>
        <div className="block-flashcard__wrapper" onClick={this.handleFlip}>
          <div className="block-flashcard__front">
            <div className="block-flashcard__content brand--border">
              <CenteredBlock>
                <Headline>{headline}</Headline>
                { showHelper && 
                  <span style={{position: 'absolute', bottom: 0, right: '5px'}}>
                    <HelpLink   
                      text="Click to Flip" 
                      clickHandler={this.handleFlip} 
                    />
                  </span>
                }
              </CenteredBlock>
            </div>
          </div>

          <div className={`block-flashcard__back ${backgroundClass}`} style={backgroundStyle}>
            <div className="block-flashcard__content">
              <CenteredBlock>
                  {headline_back && !description && <Headline>{headline_back}</Headline>}
                  {description && 
                    <ScrollBlock text={description} />
                  }
              </CenteredBlock>
            </div>
          </div>
        </div>
      </section>
    );
  }
}