import React, { useContext } from 'react';
import { ExpandableContext } from './index';
import Icon from './icon';

export default function Header({ children }) {
  const { toggle } = useContext(ExpandableContext);
  return (
    <div
      className="header"
      onClick={toggle}>{children}
      <Icon />
    </div>
  );
}