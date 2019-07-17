import React from 'react';
import AutoComplete from '../components/autocomplete';
import countries from '../data/countries';


const AutoCompletePage = (props) => {

  function onCountrySelected(country) {
    console.log(`Selected country is ${country}`);
  }

  return (
    <div>
      Where are you from?
    <AutoComplete
        onItemSelected={onCountrySelected}
        data={countries} />
      <hr />
    </div>
  )
}

export default AutoCompletePage;