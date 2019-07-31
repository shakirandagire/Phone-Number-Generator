
import React from 'react';

const SortPhoneNumbers = ({ phoneNumbers, onChange }) => (
  <div className="sort">
    {phoneNumbers.length > 0 && (
      <div>
        <span className="text">
          <strong>Sort the phone numbers using:</strong>
        </span>
        {''}
        <select onChange={onChange} className="select">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    )}
  </div>
);

export default SortPhoneNumbers;