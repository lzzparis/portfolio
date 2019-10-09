import React from 'react';
import styles from './HomePage.styles';

export const Home = () => (
  <div style={styles.root}>
    <div style={styles.banner}>
      <div style={styles.content}>
        <div style={styles.left}>
          <h1>hi, i&apos;m Lizzie</h1>
          <h2>i make stuff</h2>
          <p style={styles.links}>
            <a
              href="https://github.com/lzzparis"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.firstLink}
            >
              apps
            </a>
            <a
              href="https://instagram.com/lizzieparis.handmade"
              target="_blank"
              rel="noopener noreferrer"
            >
              art
            </a>
          </p>
        </div>
        <div style={styles.right}>
          <p style={styles.ampersand}>&</p>
        </div>
      </div>
    </div>
  </div>
);

Home.propTypes = {
};

export default Home;
