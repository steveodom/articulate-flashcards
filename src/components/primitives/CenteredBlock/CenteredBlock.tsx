import * as React from 'react';

import './style.css';

interface BlockProps {
  children: React.ReactNode;
}

const CenteredBlock: React.SFC<BlockProps> = ({ children }) => (
  <div className="centered-block brand--linkColor">
    {children}
  </div>
);

export default CenteredBlock;