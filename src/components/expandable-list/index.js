import React from 'react';
import Expandable from '../expandable';
export default function ExpandableList({ data }) {
  const list = data.map((d) => {
    return (
      <Expandable key={d.id}>
        <Expandable.Header>{d.title}</Expandable.Header>
        <Expandable.Body>{d.body}</Expandable.Body>
      </Expandable>
    )
  });
  return list;
}