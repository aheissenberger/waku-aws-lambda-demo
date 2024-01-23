import { createPages } from 'waku';

import { RootLayout } from './templates/root-layout.js';
import { HomePage } from './templates/home-page.js';
import { AboutPage } from './templates/about-page.js';
import { DirPage } from './templates/directory-list.js';

export default createPages(async ({ createPage, createLayout }) => {
  createLayout({
    render: 'static',
    path: '/',
    component: RootLayout,
  });

  createPage({
    render: 'static',
    path: '/',
    component: HomePage,
  });

  createPage({
    render: 'static',
    path: '/about',
    component: AboutPage,
  });

  createPage({
    render: 'dynamic',
    path: '/dir/[...directories]',
    component: DirPage,
  });
});
