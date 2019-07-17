import React from 'react';
import AutoComplete from '../components/autocomplete';
import countries from '../data/countries';

const style = {
  margin: 10,
}


const AutoCompletePage = (props) => {

  function onCountrySelected(country) {
    console.log(`Selected country is ${country}`);
  }

  return (
    <div style={style}>
      Where are you from?
    <AutoComplete
        onItemSelected={onCountrySelected}
        data={countries} />
      <hr />
    </div>
  )
}

export default AutoCompletePage;