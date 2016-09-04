import React from 'react';
import Button from '../components/button/button';
import styles from './styleguide.css';

export default class Styleguide extends React.Component {
  render() {
    return (
      <section className={styles.styleguide}>
        <article className={styles.styleguideItem}>
          <p>Please refer to the source code of <code>/src/docs/styleguide.js</code> to check out how to instantiate and reuse these components.</p>
        </article>

        {/* Button */}
        <article className={styles.styleguideItem}>
          <h3 className={styles.styleguideItemTitle}>components ‣ Button</h3>

          <ul>
            <li><code>title</code> string, is required</li>
            <li><code>type</code> string, not required, might take one of these values: <code>["success", "danger", "warning", "info"]</code>. If any other value gets passed in (included no value whatsoever) the component renders the default variation.</li>
          </ul>

          <Button title="Success variation" type="success" />
          <Button title="Danger variation" type="danger" />
          <Button title="Warning variation" type="warning" />
          <Button title="Info variation" type="info" />
          <Button title="Default variation" />
        </article>
      </section>
    );
  }
}
