
import React, { Component } from 'react';
import { Heading, Icon, Content } from '@xxxlgroup/hydra-ui-components';
// Styles
import styles from 'pages/Home/Home.scss';
import poseidon from 'assets/icons/poseidon.svg';

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Icon glyph={poseidon} />
        <Heading SEO content="Welcome to an Hydra App" />
        <Heading level={2} content={`Rail: ${CONFIG.RAIL_NAME}`} />
        <Content content="Hydra Corporate Identity (CI) is a platform for building React applications with conventions for supporting all XXXLGroup rails (XXXLutz, Moebelix, Moemax, ...), best practices for reusable components and a modern tech stack." />
      </div>
    );
  }
}

export default Home;
