import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Button from '.';

storiesOf('Button')
  .add('of type success', () => (
    <Button title="I'm a green button" type="success" action={action('clicked')} />
  ))
  .add('of type danger', () => (
    <Button title="I'm a red button" type="danger" action={action('clicked')} />
  ))
  .add('of type warning', () => (
    <Button title="I'm a yellow button" type="warning" action={action('clicked')} />
  ))
  .add('of type info', () => (
    <Button title="I'm a blue button" type="info" action={action('clicked')} />
  ))
  .add('of type default', () => (
    <Button title="I'm a gray button" action={action('clicked')} />
  ))
  .add('cool button with emojis', () => (
    <Button title="😀 😎 👍" type="success" action={action('clicked')} />
  ));
