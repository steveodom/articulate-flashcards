import * as React from 'react';

import './style.css';
import './../../../brand.css';

interface HeadlineProps {
  children?: React.ReactNode;
  size?: string;
}

const Headline: React.SFC<HeadlineProps> = ({ size, children }) => (
  <div className="headline__wrapper brand--head brand--linkColor">
    {children}
  </div>
);

export default Headline;