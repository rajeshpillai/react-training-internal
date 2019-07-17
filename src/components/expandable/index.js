import React, { useState, createContext, useRef, useEffect } from 'react';
import Header from './header';
import Body from './body';
import Icon from './icon';

import './style.css';

export const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

export default function Expandable({ children, onExpand }) {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => {
    setExpanded(prevExpanded => !expanded);
  }

  const componentJustMounted = useRef(true);

  useEffect(() => {
    if (!componentJustMounted.current) {
      if (onExpand) onExpand(expanded);
    }
    componentJustMounted.current = false;
  }, [expanded, onExpand])

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