import React from 'react';
import styles from './styles.css';
import closeIcon from './close.svg';

const getAlertClassName = (alertType) => {
  switch (alertType) {
    case 'success':
      return styles.alertSuccess;
    case 'error':
      return styles.alertError;
    case 'info':
      return styles.alertInfo;
    default:
      return styles.alertDefault;
  }
};

const Alert = ({ isVisible, type, message, hideAlert }) => {
  const className = getAlertClassName(type);

  return isVisible && (
    <div className={className}>
      {message}
      <img className={styles.closeButton} src={closeIcon} onClick={hideAlert} alt="Dismiss" />
    </div>
  );
};

Alert.propTypes = {
  message: React.PropTypes.string,
  type: React.PropTypes.oneOf(['success', 'error', 'info']),
  isVisible: React.PropTypes.bool.isRequired,
  hideAlert: React.PropTypes.func.isRequired
};

export default Alert;
