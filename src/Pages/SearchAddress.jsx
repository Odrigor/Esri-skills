import React, { useState } from 'react';
import axios from 'axios';

const SearchAddress = () => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);

    if (value.length > 3) {
      axios
        .get('https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest', {
          params: {
            text: value,
            f: 'json',
            token: import.meta.env.VITE_APIKEY_ARCGIS
          }
        })
        .then((response) => {
          setSuggestions(response.data.suggestions);
        });
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setAddress(suggestion.text);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter an address"
      />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.magicKey} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAddress;