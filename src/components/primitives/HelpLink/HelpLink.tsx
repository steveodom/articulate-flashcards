import * as React from 'react';

import './style.css';
import './../../../brand.css';

interface LinkProps {
  text: string;
  clickHandler?: (ev: React.MouseEvent<HTMLElement>) => void;
}

const HelpLink: React.SFC<LinkProps> = ({ text, clickHandler }) => (
  <a className="help-link brand--ui" onClick={clickHandler}>{text}</a>  
);

export default HelpLink;