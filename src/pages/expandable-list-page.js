import React from 'react';
import ExpandableList from '../components/expandable-list';

const data = [
  { id: 1, title: "List 1", body: "Content 1 goes here" },
  { id: 2, title: "List 2", body: "Content 2 goes here" },
  { id: 3, title: "List 3", body: "Content 3 goes here" },
  { id: 4, title: "List 4", body: "Content 4 goes here" },

];

const style = {
  margin: 10,
}

export default function ExpandableListPage(props) {
  return (
    <div style={style} >
      <ExpandableList data={data} />
    </div>
  );
}