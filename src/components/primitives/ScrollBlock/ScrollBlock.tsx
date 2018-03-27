import * as React from 'react';

import './style.css';
import './../../../brand.css';

interface BlockProps {
  children?: React.ReactNode;
  text: string;
}

const ScrollBlock: React.SFC<BlockProps> = ({ text, children }) => (
  <div className="scroll-block brand--head brand--linkColor">
    {text}
  </div>
);

export default ScrollBlock;