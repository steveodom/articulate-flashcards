import * as React from 'react';
import './style.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.SFC<LayoutProps> = ({ children }) => (
  <section className="layout__content">
    <div className="layout__wrapper">
      {children}
    </div>
  </section>  
);

export default Layout;