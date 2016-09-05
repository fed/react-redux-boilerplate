import React from 'react';
import sinon from 'sinon';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Button from '../src/components/button/button';

describe('Button', () => {
  it('renders only one instance of the Button component', () => {
    const button = shallow(<Button title="Test" type="success" />);

    expect(button).to.have.length(1);
  });

  it('logs out a message when clicked', () => {
    const button = shallow(<Button title="Test" type="success" />);
    const spy = sinon.spy(console, 'log');

    button.simulate('click');
    sinon.assert.calledWith(spy, 'You have just clicked on the button');
  });
});
