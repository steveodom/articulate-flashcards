import * as React from 'react';

import './style.css';
import './../../../brand.css';

interface BlockProps {
  text: string;
}

export default class ScrollBlock extends React.Component<BlockProps, {}> {
  
  componentDidMount() {
    const wrappedElement = document.getElementById('scrollBlock') as HTMLElement;
    wrappedElement.addEventListener('scroll', this.trackScrolling);  
  }
  
  trackScrolling = () => {
    // TODO: this should be optimized
    const blockElement = document.getElementById('scrollBlock') as HTMLElement;
    const contentElement = document.getElementById('scrollChild') as HTMLElement;
    const contentHeight = contentElement.offsetHeight;
    const scrollPosition = blockElement.offsetHeight + blockElement.scrollTop;
    const bottomThreshold = 20;
    
    if (contentHeight - scrollPosition < bottomThreshold) {
      blockElement.classList.remove('shaded');
    } else {
      blockElement.classList.add('shaded');
    }
    
  }
 
  render() {
    return (
      <div id="scrollBlock" className="scroll-block shaded brand--head brand--linkColor">
        <div id="scrollChild">
          {this.props.text}
        </div>
      </div>
    );
  }
}
