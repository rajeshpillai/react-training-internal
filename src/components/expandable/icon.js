import React, { useContext } from 'react';
import { ExpandableContext } from '.';

export default function Icon({ children }) {
  const { expanded } = useContext(ExpandableContext);
  return (
    expanded ?
      <span>-</span>
      : <span>+</span>
  );
}