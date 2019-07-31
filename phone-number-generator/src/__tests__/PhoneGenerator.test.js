import React from 'react';
import enzyme from 'enzyme';
import NumberGeneratorInput from '../components/NumberGeneratorInput';
import ShowPhoneNumbers from '../components/ShowPhonesNumbers';
import GetRandomPhoneNumbers from '../components/GetRandomPhoneNumbers';
import SortPhoneNumbers from '../components/SortPhoneNumbers';
import PhoneGenerator from '../components/PhoneGenerator';

describe('PhoneGenerator Component', () => {
    it('should render properly', () => {
      const node = enzyme.shallow(<PhoneGenerator/>);
      expect(node).toMatchSnapshot();
    });
  });
describe('NumberGeneratorInput Component', () => {
  it('should render properly', () => {
    const node = enzyme.shallow(<NumberGeneratorInput />);
    expect(node).toMatchSnapshot();
  });
});

describe('ShowPhoneNumbers Component', () => {
    const props = {
        phoneNumbers: [],
       }
    it('should render properly', () => {
      const node = enzyme.shallow(<ShowPhoneNumbers {...props}/>);
      expect(node).toMatchSnapshot();
    });
  });

  describe('GetRandomPhoneNumbers Component', () => {
    const props = {
        phoneNumbers: [],
       }
    it('should render properly', () => {
      const node = enzyme.shallow(<GetRandomPhoneNumbers {...props}/>);
      expect(node).toMatchSnapshot();
    });
  });

  describe('SortPhoneNumbers Component', () => {
    const props = {
        phoneNumbers: [],
        onChange: jest.fn()
       }
    it('should render properly', () => {
      const node = enzyme.shallow(<SortPhoneNumbers {...props}/>);
      expect(node).toMatchSnapshot();
    });
  });