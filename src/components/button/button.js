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

function handleClick() {
  console.log('You have just clicked on the button');
}

const Button = ({title, type}) => (
  <button className={getClassName(type)} onClick={handleClick}>{title}</button>
);

Button.propTypes = {
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string
};

export default Button;
