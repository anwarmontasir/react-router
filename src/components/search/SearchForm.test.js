import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import SearchForm from './SearchForm';

describe('Search Form', () => {
  
  it('renders as design', () => {
    const wrapper = shallow(<SearchForm onSearch={() => {}} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Calls onSearch with criteria entered', () => {
    let filter;
    const handleSearch = _filter => filter = _filter;

    const wrapper = mount(<SearchForm onSearch={handleSearch}/>);

    const search = 'Star Wars';

    // input and click
    const input = wrapper.find('input');
    input.instance().value = search;
    const form = wrapper.find('form').instance();
    const button = wrapper.find('button');
    button.simulate('submit', { target: form });

    // did the handleSearch get called with the simulated input?
    expect(filter).toBe(search);
  });
});