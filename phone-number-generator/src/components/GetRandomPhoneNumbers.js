import React from 'react';

const GetRandomPhoneNumber = ({ minimum, maximum, total, phoneNumbers }) => (
  <div>
    {phoneNumbers.length > 0 && (
      <div>
        <div>
          <strong>Minimum Phone number: </strong>
          <span>{`0${minimum}`}</span>
        </div>
        <div>
          <strong>Maximum Phone number: </strong>
          <span>{`0${maximum}`}</span>
        </div>
        <div>
          <strong>Total Phone Numbers generated: </strong>
          <span>{total}</span>
        </div>
      </div>
    )}
  </div>
);
export default GetRandomPhoneNumber;
