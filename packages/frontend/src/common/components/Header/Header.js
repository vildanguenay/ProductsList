import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Header/Header.scss';
import { logo } from '@xxxlgroup/hydra-icons';
import { Icon } from '@xxxlgroup/hydra-ui-components';

function Header({ projectName }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <a
            className={styles.navItem}
            href="https://hydra.xxxl-dev.at/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styleguide
          </a>
          <a
            className={styles.navItem}
            href="https://docs.xxxl-dev.at/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </nav>
        <div className={styles.logoContainer}>
          <Icon glyph={logo} className={styles.logo} />
          {projectName}
        </div>
        <div className={styles.actionBar} />
      </div>
      <div className={styles.hydraHint}>
        First time with Hydra? Change the color of the Header in{' '}
        <code> /frontend/lz/componenents/Header/Header.scss</code> and change this this text color
      </div>
    </div>
  );
}

Header.propTypes = {
  projectName: PropTypes.string.isRequired,
};

export default Header;
