import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '207'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'aa2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5dd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e01'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '8f7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '067'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '430'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'dc2'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f1c'),
    routes: [
      {
        path: '/docs/category/js',
        component: ComponentCreator('/docs/category/js', 'a26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/linux--docker',
        component: ComponentCreator('/docs/category/linux--docker', '4e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/objectifs',
        component: ComponentCreator('/docs/category/objectifs', '263'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/oc',
        component: ComponentCreator('/docs/category/oc', '074'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/php',
        component: ComponentCreator('/docs/category/php', '7bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/projet1',
        component: ComponentCreator('/docs/category/projet1', '3de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/projet2',
        component: ComponentCreator('/docs/category/projet2', '745'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/projet3',
        component: ComponentCreator('/docs/category/projet3', '2b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/projet4',
        component: ComponentCreator('/docs/category/projet4', 'ad1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/projet5',
        component: ComponentCreator('/docs/category/projet5', '0d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/projet6',
        component: ComponentCreator('/docs/category/projet6', '334'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/projet7',
        component: ComponentCreator('/docs/category/projet7', 'fc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/projet8',
        component: ComponentCreator('/docs/category/projet8', '900'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/projet9',
        component: ComponentCreator('/docs/category/projet9', 'a54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/ressources',
        component: ComponentCreator('/docs/category/ressources', '423'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/symfony',
        component: ComponentCreator('/docs/category/symfony', 'b54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/JS/demoJs',
        component: ComponentCreator('/docs/OC/JS/demoJs', 'bb1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Objectifs/P6',
        component: ComponentCreator('/docs/OC/PHP/Objectifs/P6', '41a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Objectifs/P7',
        component: ComponentCreator('/docs/OC/PHP/Objectifs/P7', 'c84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Objectifs/P8',
        component: ComponentCreator('/docs/OC/PHP/Objectifs/P8', '70c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Objectifs/P9',
        component: ComponentCreator('/docs/OC/PHP/Objectifs/P9', '87d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Projet1/p1',
        component: ComponentCreator('/docs/OC/PHP/Projet1/p1', 'e70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Projet2/p2',
        component: ComponentCreator('/docs/OC/PHP/Projet2/p2', '837'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Projet3/p3',
        component: ComponentCreator('/docs/OC/PHP/Projet3/p3', '5d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Projet4/p3',
        component: ComponentCreator('/docs/OC/PHP/Projet4/p3', '52b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Projet5/p3',
        component: ComponentCreator('/docs/OC/PHP/Projet5/p3', '12c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Projet6/Modèle de données',
        component: ComponentCreator('/docs/OC/PHP/Projet6/Modèle de données', '1c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Projet7/p7',
        component: ComponentCreator('/docs/OC/PHP/Projet7/p7', 'b5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Projet8/p3',
        component: ComponentCreator('/docs/OC/PHP/Projet8/p3', '7ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/OC/PHP/Projet9/p3',
        component: ComponentCreator('/docs/OC/PHP/Projet9/p3', '915'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Ressources/AdobeExpress',
        component: ComponentCreator('/docs/Ressources/AdobeExpress', '919'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Ressources/FreePik',
        component: ComponentCreator('/docs/Ressources/FreePik', '35e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Symfony/Construire une api rest',
        component: ComponentCreator('/docs/Symfony/Construire une api rest', 'c0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Symfony/Linux + Docker/Installation docker',
        component: ComponentCreator('/docs/Symfony/Linux + Docker/Installation docker', 'f5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Symfony/Linux + Docker/Installation environnement dev',
        component: ComponentCreator('/docs/Symfony/Linux + Docker/Installation environnement dev', '9ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Symfony/Linux + Docker/Installation linux',
        component: ComponentCreator('/docs/Symfony/Linux + Docker/Installation linux', 'c53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Symfony/Linux + Docker/Installation vscode',
        component: ComponentCreator('/docs/Symfony/Linux + Docker/Installation vscode', '103'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Symfony/Linux + Docker/Préparation nouveau projet',
        component: ComponentCreator('/docs/Symfony/Linux + Docker/Préparation nouveau projet', 'c9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a04'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
