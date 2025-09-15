import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}></div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* Existing homepage features section */}
        <HomepageFeatures />

        {/* New Comments section */}
        <section className="container" style={{ marginTop: '2rem' }}>
          <h2>My comments:</h2>
          <ul>
            <li>The user guide is assumed to be part of a larger documentation set, which is why I don't explain what Allegro is (it's a Polish online e-commerce platform) or how to perform other actions.</li>
            <li>BLIK (one of the payment methods) is briefly explained, as non-Polish Allegro users may not be familiar with it.</li>
            <li>Only three out of five payment methods are described, as I don't have Google Pay or Visa Mobile accounts.</li>
            <li>All the screenshots were taken and resized by me.</li>
            <li>I added a black border to the screenshots using CSS, as most of them have a white background that blends with the page.</li>
            <li>I applied an orange color theme to the page to make it resemble Allegro's branding.</li>
            <li>For accessibility reasons, all the images have alt text and the bank list is presented as text.</li>
            <li>Names of UI elements are in bold.</li>
            <li>The content is similar for PC and the mobile app (with minor differences).</li>
            <li>In the BLIK user guide pages, the final message screenshot is included only in one subsection to avoid unnecessary repetition.</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}