import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr} from '../test/testUtils';
import Input from './Input';
/**
 * @param  {} initialState={}
 * @param  {} =>{constwrapper=shallow(<Input/>
 * @param  {} ;console.log(wrapper.debut(
 */
const setup = (initialState={}) => {
  const wrapper = shallow(<Input />);
  console.log(wrapper.debut());
}

describe('render', () => {
describe('word has not been guessed', () => {
test('renders component without error', () =>{

});
test('renders input box', () => {

});
test('renders submit button', () => {

});
});
describe('word has been guessed',() =>{
  test('renders component without error', () =>{

  });
  test('does not render input box', () => {
  
  });
  test('does not renders submit button', () => {
  
  });
});
});
describe('update state', () => {

});