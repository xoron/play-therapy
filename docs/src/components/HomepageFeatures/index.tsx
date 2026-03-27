import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {PLACEHOLDER_IMAGES} from '@site/src/data/placeholderImages';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  imageAlt: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Child-led play',
    image: PLACEHOLDER_IMAGES.feature1,
    imageAlt: 'Placeholder illustration for child-led play',
    description: (
      <>
        Children often communicate and heal through <strong>play</strong>. We
        follow their lead in a structured, safe environment.
      </>
    ),
  },
  {
    title: 'A steady relationship',
    image: PLACEHOLDER_IMAGES.feature2,
    imageAlt: 'Placeholder illustration for therapeutic relationship',
    description: (
      <>
        Progress grows from a warm, dependable connection—so your child can
        explore feelings at their own pace.
      </>
    ),
  },
  {
    title: 'Partnership with you',
    image: PLACEHOLDER_IMAGES.feature3,
    imageAlt: 'Placeholder illustration for caregiver collaboration',
    description: (
      <>
        Caregivers are essential. We collaborate with you on goals, updates, and
        strategies that fit your <strong>real life</strong> at home.
      </>
    ),
  },
];

function Feature({title, image, imageAlt, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          className={styles.featureImage}
          src={image}
          alt={imageAlt}
          width={200}
          height={200}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
