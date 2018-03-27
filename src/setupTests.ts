// src/setupTests.ts
import * as Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

// tslint:disable-next-line:no-any
window.matchMedia = (window.matchMedia as any) || function() {
  return {
    matches: false,
    // tslint:disable-next-line:no-empty
    addListener: function() {},
    // tslint:disable-next-line:no-empty
    removeListener: function() {}
  };
};