import React from 'react';
import styles from './spinner.css';
import img from './spinner.gif';

const Spinner = ({loading}) => {
  if (loading) {
    return (
      <div className={styles.spinnerWrapper}>
        <img src={img} className={styles.spinnerLoader} />
      </div>
    );
  } else {
    return null;
  }
};

Spinner.propTypes = {
  loading: React.PropTypes.bool.isRequired
};

export default Spinner;
