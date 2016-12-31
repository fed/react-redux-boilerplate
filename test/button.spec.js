import React from 'react';
import sinon from 'sinon';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Button from '../src/components/button';

describe('Button', () => {
  it('renders only one instance of the Button component', () => {
    const button = shallow(<Button type="success">Test Button</Button>);

    expect(button).to.have.length(1);
  });

  it('logs out a message when clicked', () => {
    const log = () => console.log('You have just clicked on the button');
    const button = shallow(<Button onClick={log}>Test Button</Button>);
    const spy = sinon.spy(console, 'log');

    button.simulate('click');
    sinon.assert.calledWith(spy, 'You have just clicked on the button');
  });
});
