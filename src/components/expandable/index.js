import React, { useState, createContext } from 'react';
import Header from './header';
import Body from './body';
import Icon from './icon';

import './style.css';

export const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

export default function Expandable({ children }) {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => {
    setExpanded(prevExpanded => !expanded);
  }
  const value = () => {
    return {
      expanded,
      toggle
    }
  }
  return (
    <Provider value={value()}>
      {children}
    </Provider>
  );
}

Expandable.Header = Header;
Expandable.Body = Body;