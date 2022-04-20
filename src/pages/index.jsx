import React from 'react';

import Agents from 'components/pages/index/Agents/Agents';
import Episode from 'components/pages/index/Episode/Episode';
import Hero from 'components/pages/index/Hero/Hero';
import News from 'components/pages/index/News/News';

import Header from 'components/shared/Header/Header';

import '../stylesheets/all.scss';

const IndexPage = () => {
  return (
    <>
      <Header />
      <main className="content">
        <Hero />
        <News />
        <Episode />
        <Agents />
      </main>
    </>
  );
};

export default IndexPage;
