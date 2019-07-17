import React, { useContext } from 'react';
import { ExpandableContext } from '.';

export default function Body({ children }) {
  const { expanded } = useContext(ExpandableContext);
  return expanded ? <div className="body">{children}</div> : null;
}