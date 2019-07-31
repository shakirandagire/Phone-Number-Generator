import React from 'react';

const ShowPhoneNumbers = ({ phoneNumbers }) => {
  return (
    <div>
      {phoneNumbers.length < 1 ? (
        <h3 style={{ margin: '20px' }}>
          No phone numbers to display
        </h3>
      ) : (
        <h3 style={{ margin: '20px' }}>List of Generated Phone Numbers</h3>
      )}
      <div style={{ margin: '20px' }} className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {phoneNumbers &&
              phoneNumbers.map((phoneNumber, index) => (
                <tr key={phoneNumber}>
                  <td>{++index}.</td>
                  <td>{phoneNumber}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ShowPhoneNumbers;