import React, { Component } from 'react';
import NumberGeneratorInput from './NumberGeneratorInput';
import SortPhoneNumbers from './SortPhoneNumbers';
import ShowPhonesNumbers from './ShowPhonesNumbers';
import GetRandomPhoneNumber from './GetRandomPhoneNumbers'

class PhoneGenerator extends Component {
  state = {
    phoneNumbers: [],
    number: '',
    total: 0,
    sorter: 'asc',
    minimum: null,
    maximum: null,
    error: false
  };

  generatePhoneNumbers = event => {
    event.preventDefault();
    const { number, phoneNumbers } = this.state;
    if (!number || number > 10000)
      return this.setState({
        error: true,
        message: alert('The number hasnot been entered or exceeds the accepted number of phone numbers to be generated')
      });
      let phoneNumber = 0;
    while (phoneNumber < number) {
      phoneNumbers.push(
        '0' + Math.floor(Math.random() * 900000000 + 100000000)
      );
      phoneNumber++;
    }
    return this.setState(
      {
        phoneNumbers
      },
      () => this.getRandomPhoneNumbers(),
      this.handleSortingPhoneNumbers()
    );
  };

  getRandomPhoneNumbers= () => {
    const { phoneNumbers } = this.state;
    if (phoneNumbers.length > 0) {
      const minimum = Math.min(...phoneNumbers);
      const maximum = Math.max(...phoneNumbers);
      const total = phoneNumbers.length;
      this.setState({
        minimum,
        maximum,
        total
      });
    }
  };

  handleUserNumberInput = async event => {
    event.preventDefault();
    const number = event.target.value;
    if (Math.floor(Number(number))) {
      this.setState({
        number
      });
    }
  }

  handleSortingPhoneNumbers = () => {
    const { sorter, phoneNumbers } = this.state;
    if (!phoneNumbers.length > 0) return;
    if (sorter === 'asc') {
      this.setState({
        phoneNumbers: phoneNumbers.sort((x, y) => 0 - (x > y ? -1 : 1))
      });
    } else {
      this.setState({
        phoneNumbers: phoneNumbers.sort((x, y) => 0 - (x > y ? 1 : -1))
      });
    }
  };
  handleOnSortingChange = event => {
    event.preventDefault();
    const sorter = event.target.value;
    this.setState(
      {
        sorter
      },
      () => this.handleSortingPhoneNumbers()
    );
  };

  render() {
    const { minimum, maximum, total, phoneNumbers } = this.state;
    return (
        <div className="container">
            <div className="input">
              <NumberGeneratorInput
                onClick={this.generatePhoneNumbers}
                onChange={this.handleUserNumberInput}
              />
            </div>

            <GetRandomPhoneNumber
              phoneNumbers={phoneNumbers}
              minimum={minimum}
              maximum={maximum}
              total={total}
            />

            <SortPhoneNumbers
              phoneNumbers={phoneNumbers}
              onChange={this.handleOnSortingChange}
            />
            <ShowPhonesNumbers phoneNumbers={phoneNumbers} />
        </div>
    );
  }
}

export default PhoneGenerator;