import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {PLACEHOLDER_IMAGES} from '@site/src/data/placeholderImages';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header
      className={clsx('hero', 'pt-hero--home', styles.heroBanner)}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroGrid}>
          <div>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/contact">
                Get in touch
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/approach">
                How we work
              </Link>
            </div>
          </div>
          <figure className={styles.heroVisual}>
            <img
              src={PLACEHOLDER_IMAGES.hero}
              alt="Placeholder hero image — replace with a welcoming photo of your play space or logo"
              width={640}
              height={360}
            />
          </figure>
        </div>
      </div>
    </header>
  );
}

function ServicesSnapshot(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h2" className="text--center">
              Support that meets children where they are
            </Heading>
            <p className="text--center">
              Placeholder overview—we’ll tailor this to your scope of practice,
              ages served, and session formats.
            </p>
            <ul className={styles.servicesList}>
              <li>
                <strong>Play therapy</strong> for children who need help with
                big feelings, stress, or life changes
              </li>
              <li>
                <strong>Caregiver collaboration</strong> so progress continues
                between sessions
              </li>
              <li>
                <strong>Clear next steps</strong> from first contact through
                your personalized plan
              </li>
            </ul>
            <div className="text--center">
              <Link className="button button--primary" to="/docs/services">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip(): ReactNode {
  return (
    <div className={styles.trustStrip}>
      <p>
        <strong>Placeholder:</strong> Licensed clinician · Specialized training
        in play therapy · Serving [your city or region]
      </p>
    </div>
  );
}

function ClosingCTA(): ReactNode {
  return (
    <section className={clsx(styles.sectionMuted, styles.ctaBand)}>
      <div className="container">
        <Heading as="h2">Ready to learn more?</Heading>
        <p>
          Share a little about your child and your questions—we&apos;ll respond
          with kindness and clarity.
        </p>
        <div className={styles.ctaActions}>
          <Link
            className="button button--primary button--lg"
            to="/docs/contact">
            Contact us
          </Link>
          <Link className="button button--outline button--lg" to="/docs/faq">
            Read FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Play therapy and family-centered support for children. Warm, developmentally sensitive care—placeholder site content.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ServicesSnapshot />
        <TrustStrip />
        <ClosingCTA />
      </main>
    </Layout>
  );
}
