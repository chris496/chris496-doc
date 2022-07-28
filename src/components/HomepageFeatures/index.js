import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


const FeatureList = [
  {
    title: 'OC - PHP - Projet6',
    link: ("/docs/category/projet6"),
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'OC - PHP - Projet7',
    link: ("/docs/category/projet7"),
    Svg: require('@site/static/img/api1.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'OC - PHP - Projet8',
    link: ("/docs/category/projet8"),
    Svg: require('@site/static/img/TestUnitaire.svg').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
         <div className={styles.buttons}>
         <Link
          className="button button--success button--lg"
          to={link}>
          Détails 
        </Link>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
