import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

const getTypeClassName = (type) => {
  switch (type) {
    case 'primary':
      return styles.buttonBlue;
    case 'danger':
      return styles.buttonRed;
    case 'success':
      return styles.buttonGreen;
    default:
      return styles.buttonWhite;
  }
};

const getSizeClassName = (size) => {
  switch (size) {
    case 'small':
      return styles.buttonSmall;
    case 'large':
      return styles.buttonLarge;
    default:
      return styles.buttonMedium;
  }
};

const Button = ({ type, size, disabled, onClick, children, className }) => {
  const buttonClassName = classnames(
    styles.button,
    getTypeClassName(type),
    getSizeClassName(size),
    className
  );

  return (
    <button type="button" className={buttonClassName} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {}
};

Button.propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  children: React.PropTypes.string,
  size: React.PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
  type: React.PropTypes.oneOf([
    'primary',
    'danger',
    'success'
  ])
};

export default Button;
