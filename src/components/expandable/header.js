import React, { useContext } from 'react';
import { ExpandableContext } from './index';
import Icon from './icon';

export default function Header({ children }) {
  const { toggle } = useContext(ExpandableContext);
  return (
    <h3
      className="header"
      onClick={toggle}>{children}
      <Icon />
    </h3>
  );
}