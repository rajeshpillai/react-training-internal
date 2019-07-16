import React, { useState } from 'react';
import './auto.css';

export default function AutoComplete(props) {
  const [data, setData] = useState(props.data);
  const [filtered, setFiltered] = useState([]);
  const inputRef = React.createRef();

  const onChange = (e) => {
    let search = e.target.value;
    if (search.trim() == "") {
      setFiltered([]);
      return;
    }
    let result = data.filter((d) => {
      if (d.toLowerCase().startsWith(search.toLowerCase())) {
        return d;
      }
    });

    console.log("result: ", result);

    setFiltered(result);
  }

  const onSelect = (d) => {
    inputRef.current.value = d;
    props.onItemSelected(d);
    setFiltered([]);
  }
  return (
    <div>
      <input ref={inputRef} onChange={onChange} type="text" placeholder="country name" />
      {(filtered && filtered.length) > 0 && <ul role="select" className="autocomplete">
        {filtered.map((f) => {
          return (
            <li key={f}><button onClick={() => onSelect(f)} href="#">{f}</button></li>
          )
        })}
      </ul>}
    </div>
  );
}