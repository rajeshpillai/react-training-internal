import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

export default function Menu() {
  return (
    <nav className="top-nav">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/autocomplete">AutoComplete Demo</NavLink>
      <NavLink to="/expandlist">Expandable List</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}