import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {motion, useReducedMotion} from 'framer-motion';
import {PLACEHOLDER_IMAGES} from '@site/src/data/placeholderImages';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {
  SCROLL_VIEWPORT,
  heroFigureVariants,
  heroStaggerVariants,
  homeTransition,
} from '@site/src/utils/homeMotion';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const prefersReducedMotion = useReducedMotion();
  const hero = heroStaggerVariants(prefersReducedMotion);
  const figureVariants = heroFigureVariants(prefersReducedMotion);

  return (
    <header className={clsx('hero', 'pt-hero--home', styles.heroBanner)}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroGrid}>
          <motion.div
            className={styles.heroTextCol}
            variants={hero.container}
            initial="hidden"
            animate="visible">
            <motion.div variants={hero.item}>
              <Heading as="h1" className="hero__title">
                {siteConfig.title}
              </Heading>
            </motion.div>
            <motion.p className="hero__subtitle" variants={hero.item}>
              {siteConfig.tagline}
            </motion.p>
            <motion.div className={styles.buttons} variants={hero.item}>
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
            </motion.div>
          </motion.div>
          <motion.figure
            className={styles.heroVisual}
            variants={figureVariants}
            initial="hidden"
            animate="visible">
            <img
              src={PLACEHOLDER_IMAGES.hero}
              alt="Stock photo example (children at play) — replace with your own hero image"
              width={640}
              height={360}
              loading="eager"
            />
          </motion.figure>
        </div>
      </div>
    </header>
  );
}

function ServicesSnapshot(): ReactNode {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className={styles.section}
      initial={
        prefersReducedMotion
          ? {opacity: 1, y: 0}
          : {opacity: 0, y: 32}
      }
      whileInView={{opacity: 1, y: 0}}
      viewport={SCROLL_VIEWPORT}
      transition={homeTransition(prefersReducedMotion)}>
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
    </motion.section>
  );
}

function TrustStrip(): ReactNode {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.trustStrip}
      initial={
        prefersReducedMotion
          ? {opacity: 1, y: 0}
          : {opacity: 0, y: 16}
      }
      whileInView={{opacity: 1, y: 0}}
      viewport={SCROLL_VIEWPORT}
      transition={homeTransition(prefersReducedMotion, {duration: 0.45})}>
      <p>
        <strong>Placeholder:</strong> Licensed clinician · Specialized training
        in play therapy · Serving [your city or region]
      </p>
    </motion.div>
  );
}

function ClosingCTA(): ReactNode {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className={clsx(styles.sectionMuted, styles.ctaBand)}
      initial={
        prefersReducedMotion
          ? {opacity: 1, y: 0}
          : {opacity: 0, y: 36}
      }
      whileInView={{opacity: 1, y: 0}}
      viewport={SCROLL_VIEWPORT}
      transition={homeTransition(prefersReducedMotion, {duration: 0.58})}>
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
    </motion.section>
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
