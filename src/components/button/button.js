import React from 'react';
import styles from './button.css';

function getClassName(type) {
  let className;

  switch (type) {
    case 'success':
      className = styles.buttonSuccess;
      break;
    case 'danger':
      className = styles.buttonDanger;
      break;
    case 'warning':
      className = styles.buttonWarning;
      break;
    case 'info':
      className = styles.buttonInfo;
      break;
    default:
      className = styles.buttonDefault;
  }

  return className;
}

const Button = ({ title, type, action }) => (
  <button className={getClassName(type)} onClick={action}>{title}</button>
);

Button.defaultProps = {
  action: () => console.log('You have just clicked on the button')
};

Button.propTypes = {
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  action: React.PropTypes.func
};

export default Button;
