import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Button from '.';

const log = action('You\'ve just clicked the button');

storiesOf('Button')
  .add('of type primary and small size', () => (
    <Button type="primary" size="small" onClick={log}>Save changes</Button>
  ))
  .add('of type primary and default size', () => (
    <Button type="primary" onClick={log}>Save changes</Button>
  ))
  .add('of type primary and large size', () => (
    <Button type="primary" size="large" onClick={log}>Save changes</Button>
  ))
  .add('of type confirm and small size', () => (
    <Button type="success" size="small" onClick={log}>Export</Button>
  ))
  .add('of type success', () => (
    <Button type="success" onClick={log}>Export</Button>
  ))
  .add('of type success and large size', () => (
    <Button type="success" size="large" onClick={log}>Export</Button>
  ))
  .add('of type danger and small size', () => (
    <Button type="danger" size="small" onClick={log}>Remove</Button>
  ))
  .add('of type danger', () => (
    <Button type="danger" onClick={log}>Remove</Button>
  ))
  .add('of type danger and large size', () => (
    <Button type="danger" size="large" onClick={log}>Remove</Button>
  ))
  .add('of type default and small size', () => (
    <Button size="small" onClick={log}>Logout</Button>
  ))
  .add('of type default', () => (
    <Button onClick={log}>Logout</Button>
  ))
  .add('of type default and large size', () => (
    <Button size="large" onClick={log}>Logout</Button>
  ))
  .add('cool button with emojis', () => (
    <Button type="create" onClick={log}>😀 😎 👍</Button>
  ));
