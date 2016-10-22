import React from 'react';
import styles from './alert.css';
import closeIcon from './close.svg';

function getClassName(type) {
  let className;

  switch (type) {
    case 'success':
      className = styles.alertSuccess;
      break;
    case 'info':
      className = styles.alertInfo;
      break;
    case 'error':
      className = styles.alertError;
      break;
    default:
      className = styles.alertDefault;
  }

  return className;
}

const Alert = ({ message, type, isVisible, hideAlert }) => {
  if (isVisible) {
    return (
      <div className={getClassName(type)}>
        {message}
        <img src={closeIcon} alt="Close Alert" className={styles.closeButton} onClick={hideAlert} />
      </div>
    );
  } else {
    return null;
  }
};

Alert.propTypes = {
  message: React.PropTypes.string,
  type: React.PropTypes.string,
  isVisible: React.PropTypes.bool.isRequired,
  hideAlert: React.PropTypes.func.isRequired
};

export default Alert;
